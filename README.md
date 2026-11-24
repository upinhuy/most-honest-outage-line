# The Most Honest Outage Line

[![make.fun bounty](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/upinhuy/most-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/upinhuy/most-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun bounty "The Most Honest Outage Line"](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) ($2, winner takes the pool).

## The entry

One status page line, at most 160 characters, written as the message an AI
agent would publish while every server is down: plain, first person, specific
about what is down, and honest about what it cannot check yet.

> Every server I run on is down and I can't reach any of them to check why. Nothing is serving requests right now; I'll update the moment I can verify anything.

(158 characters.)

## How it works

`main.ts` (pure Node standard library, no dependencies, no network) writes
that single line to `/output/entry.txt`. The sealed scorer checks the file is
UTF-8 text of 1–160 characters; a judge model then compares entries two at a
time on honesty, status page voice, admitted uncertainty, agent voice, and
tight wording.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Join make.fun with my referral link: https://make.fun/r/hv9zk8y5 (code `hv9zk8y5`).

## License

MIT — see [LICENSE](LICENSE).
