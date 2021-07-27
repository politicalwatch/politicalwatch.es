export default function (ctx) {
  if (ctx.route.fullPath === '/covid-19') {
    ctx.redirect(301, '/blog/un-año-covidwatch')
  }
}
