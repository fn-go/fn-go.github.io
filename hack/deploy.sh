#! /usr/bin/env bash

set -Eeuo pipefail

hackDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
repoDir="$(dirname "${hackDir}")"

if [[ $(git diff --stat) != '' ]]; then
  echo 'dirty'
  exit 1
else
  echo 'clean'
fi

set -o xtrace

currentCommit="$(git rev-parse --short HEAD)"
projectName="fn-go.github.io"
deploymentBranch="gh-pages"
organizationName="fn-go"
deploymentRepoURL="git@github.com:${organizationName}/${projectName}.git"
fromPath="${repoDir}/build"
toPath="$(mktemp -d "${TMPDIR:-/tmp/}${projectName}-${deploymentBranch}.XXXXXXXXXXXX")"

yarn build

git clone --depth 1 --branch "${deploymentBranch}" "${deploymentRepoURL}" "${toPath}"

(
  set -Eeuo pipefail
  set -o xtrace
  cd "${toPath}"
  cp "${repoDir}/.git/config" "${toPath}/.git/config"

  git rm -rf . || true
  cp -a "${fromPath}/." "${toPath}/"
  git add --all
  git commit -m "feat: 🚀 Deploy website - based on ${currentCommit}"
  git push --force origin "${deploymentBranch}"
)

echo "done!"
