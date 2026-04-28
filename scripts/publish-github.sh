#!/usr/bin/env bash
# Creates github.com/alihamzarana/alihamza-portfolio (if missing) and pushes branch main.
# Requires: GitHub Personal Access Token (classic) with "repo" scope, or fine-grained with repo access.
#
# Usage:
#   export GITHUB_TOKEN=ghp_your_token_here
#   ./scripts/publish-github.sh
#
set -euo pipefail

OWNER="${GITHUB_OWNER:-alihamzarana}"
REPO="${GITHUB_REPO:-alihamza-portfolio}"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Error: Set GITHUB_TOKEN to a GitHub PAT."
  echo "Create one: GitHub → Settings → Developer settings → Personal access tokens → Generate (enable \"repo\")."
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "→ Ensuring repository exists: ${OWNER}/${REPO}"
HTTP_BODY="$(mktemp)"
HTTP_CODE="$(curl -sS -o "$HTTP_BODY" -w "%{http_code}" \
  -X POST "https://api.github.com/user/repos" \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  -d "{\"name\":\"${REPO}\",\"private\":false,\"auto_init\":false,\"description\":\"Ali Hamza portfolio\"}")"

if [[ "$HTTP_CODE" == "201" ]]; then
  echo "→ Created empty repository on GitHub."
elif [[ "$HTTP_CODE" == "422" ]]; then
  if grep -q "already exists" "$HTTP_BODY" 2>/dev/null; then
    echo "→ Repository already exists on GitHub (OK)."
  else
    echo "GitHub API response ($HTTP_CODE):"
    cat "$HTTP_BODY"
    exit 1
  fi
else
  echo "GitHub API error ($HTTP_CODE):"
  cat "$HTTP_BODY"
  rm -f "$HTTP_BODY"
  exit 1
fi
rm -f "$HTTP_BODY"

REMOTE_URL="https://github.com/${OWNER}/${REPO}.git"
REMOTE_PUSH="https://x-access-token:${GITHUB_TOKEN}@github.com/${OWNER}/${REPO}.git"

git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_PUSH"

echo "→ Pushing main..."
git push -u origin main

git remote set-url origin "$REMOTE_URL"

echo "Done. Remote: ${REMOTE_URL}"
echo "Next time you can use: git push origin main"
echo "(Authenticate via GitHub CLI, SSH, or credential manager.)"
