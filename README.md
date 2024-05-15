Reproduction repo for a possible bug in react-cookie

To setup:
```bash
npm install
npm run dev
```

To reproduce the bug:
1. Open the browser console
2. The `page.tsx` will set a cookie named `cookie-obj` with a values as an object
3. two buttons are being rendered, one (above) that uses a `string` cookie and one (below) that uses the `object` cookie (same set by the page)
4. Click on the button below ("Change Cookie Object"), this will change the cookie object, correctly you will see that that button re-renders
5. Click on the button above ("Change btn Cookie"), this will change the cookie string, correctly you will see that that button re-renders, BUT you will notice that also the button below re-renders, which is not expected
6. This happens because the `useCookies` hook compare the cookies with `===`, this way the cookies that have object values are always going to be evaluated as different (because the object reference won't be the same, no matter what changes).

I tried to change the `useCookies` hook to compare the cookies with `JSON.stringify` (I know, not the way to go but was enough to verify that that was the problem) and indeed the below button don't re-render when other cookie changes.