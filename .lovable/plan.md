## Update favicon to HLPR logo

1. Copy uploaded logo `user-uploads://HLPR_logo_200_x_200_px.png` → `public/favicon.png`
2. Delete `public/favicon.ico` so browsers don't fall back to the old Lovable icon
3. Update `index.html`:
   - Add `<link rel="icon" type="image/png" href="/favicon.png?v=2" />` in `<head>`
   - Add `<link rel="apple-touch-icon" href="/favicon.png?v=2" />` for iOS

That's it — no external link needed, the file lives in the project.