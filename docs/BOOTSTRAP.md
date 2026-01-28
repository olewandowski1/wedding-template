# How to Bootstrap a New Wedding Project

1. **Clone/Copy**: Copy the contents of this repository into your new project folder.
2. **Environment**: Create a `.env.local` file based on the keys used in `lib/access.ts`:
   - `WEDDING_ACCESS_PASSWORD`: The password for guests.
   - `WEDDING_ACCESS_SECRET`: A random string for secure cookies.
3. **Core Config**: Update `config/site.ts`.
   - Set `LOCALE` to `'en'` or `'pl'`.
   - Update names and event details.
4. **Style Configuration**:
   - Choose your fonts in `app/layout.tsx`.
   - Set your color palette in `styles/globals.css`.
5. **Content**:
   - Update strings in `messages/en.json` and `messages/pl.json`.
6. **Skills**: Use the provided AI skills in `.agent/skills/` to generate the custom UI sections.
