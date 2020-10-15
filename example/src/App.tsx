import React from 'react'

import { LogViewer } from 'log-viewer'

const App = () => {
  const text: any = `yarn run v1.22.4
$ start-server-and-test serve http://localhost:8000 cy:run
1: starting server using command "npm run serve"
and when url "http://localhost:8000" is responding with HTTP status code 200
running tests using command "npm run cy:run"

npm WARN lifecycle The node binary used for scripts is /tmp/yarn--1599295401272-0.8535979788498027/node but npm is using /opt/hostedtoolcache/node/10.22.0/x64/bin/node itself. Use the  option to include the path for the node binary npm was executed with.

> gatsby-starter-default@0.1.0 serve /home/runner/work/rebranch/rebranch
> gatsby serve -p 8000

Using environment config: 'development'
⠀
You can now view gatsby-starter-default in the browser.
⠀
  http://localhost:8000/
npm WARN lifecycle The node binary used for scripts is /tmp/yarn--1599295401272-0.8535979788498027/node but npm is using /opt/hostedtoolcache/node/10.22.0/x64/bin/node itself. Use the option to include the path for the node binary npm was executed with.

> gatsby-starter-default@0.1.0 cy:run /home/runner/work/rebranch/rebranch
> cypress run

It looks like this is your first time using Cypress: 4.9.0

25l[08:43:24]  Verifying Cypress can run /home/runner/.cache/Cypress/4.9.0/Cypress [started]
[08:43:30]  Verifying Cypress can run /home/runner/.cache/Cypress/4.9.0/Cypress [completed]
25h
Opening Cypress...

tput: No value for $TERM and no -T specified`

  return <LogViewer text={text} />
}

export default App
