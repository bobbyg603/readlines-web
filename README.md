[![bugsplat-github-banner-basic-outline](https://user-images.githubusercontent.com/20464226/149019306-3186103c-5315-4dad-a499-4fd1df408475.png)](https://bugsplat.com)
<br/>
# <div align="center">BugSplat</div> 
### **<div align="center">Crash and error reporting built for busy developers.</div>**
<div align="center">
    <a href="https://twitter.com/BugSplatCo">
        <img alt="Follow @bugsplatco on Twitter" src="https://img.shields.io/twitter/follow/bugsplatco?label=Follow%20BugSplat&style=social">
    </a>
    <a href="https://discord.gg/bugsplat">
        <img alt="Join BugSplat on Discord" src="https://img.shields.io/discord/664965194799251487?label=Join%20Discord&logo=Discord&style=social">
    </a>
</div>

<br/>

# readline-web

A nifty little library for reading files line-by-line using ReadableStreams and is compatible in both node.js and the browser. Inspired by this [post on MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read#example_2_-_handling_text_line_by_line).

## Usage

Install this package locally.

```sh
npm i readline-web
```

Import `makeTextFileLineIterator` and create an iterator.

```ts
import { makeTextFileLineIterator } from 'readlines-web';
```

You can process each line in a loop.

```ts
for await (let line of iterator) {
  console.log(line);
}
```

Or process a single line using `next()`.

```ts
const { value, done } = await iterator.next();
```

## 🐛 About

[BugSplat](https://bugsplat.com) is a software crash and error reporting service with support for [macOS](https://docs.bugsplat.com/introduction/getting-started/integrations/desktop/macos), [iOS](https://docs.bugsplat.com/introduction/getting-started/integrations/mobile/ios), [Qt](https://docs.bugsplat.com/introduction/getting-started/integrations/cross-platform/qt), [Unreal Engine](https://docs.bugsplat.com/introduction/getting-started/integrations/game-development/unreal-engine) and [many more](https://docs.bugsplat.com/introduction/getting-started/integrations). BugSplat automatically captures critical diagnostic data such as stack traces, log files, and other runtime information. BugSplat also provides automated incident notifications, a convenient dashboard for monitoring trends and prioritizing engineering efforts, and integrations with popular development tools to maximize productivity and ship more profitable software.
