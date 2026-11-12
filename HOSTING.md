# Hosting with a professional URL

The site runs on [Render](https://render.com) as a Docker web service (see `Dockerfile`,
`entrypoint.sh` and `render.yaml`). This guide covers going from `*.onrender.com`
to your own domain with HTTPS, and keeping data persistent.

## 1. Buy a domain (≈ $10–15 / year)

Suggested names: `haythemaljane.com`, `haythem.dev`, `aljane.dev`.
Registrars: Cloudflare Registrar (cheapest renewals), Porkbun, Namecheap.
For a `.tn` domain use a local Tunisian registrar.

## 2. Deploy (or re-deploy) on Render with the Blueprint

1. Push this repository to GitHub (already done).
2. In Render: **New → Blueprint**, pick the `haythemalj/portfolio` repo.
   Render reads `render.yaml` and creates:
   - the **web service** (Docker), and
   - a **Postgres database** wired in through `DATABASE_URL`.
3. In the web service → **Environment**, fill in the values marked `sync: false`:

   | Key | Value |
   |---|---|
   | `ADMIN_EMAIL` | the email you log in with at `/login` |
   | `ADMIN_PASSWORD` | a strong password (12+ chars). The seeder sets it on every deploy |
   | `CONTACT_EMAIL` | where contact-form messages are delivered |
   | `MAIL_USERNAME` / `MAIL_FROM_ADDRESS` | your Gmail address |
   | `MAIL_PASSWORD` | a Gmail **App Password** (myaccount.google.com/apppasswords), *not* your normal password |

4. Click **Manual Deploy → Deploy latest commit**. The entrypoint runs
   migrations and seeds automatically.

> Already have a service created by hand? Keep it, add a Postgres database
> (**New → PostgreSQL**), then add `DATABASE_URL` from the database's
> *Internal Connection String* and `DB_CONNECTION=pgsql` to the service.

## 3. Connect the domain

1. Web service → **Settings → Custom Domains → Add**: add both
   `haythemaljane.com` and `www.haythemaljane.com`.
2. Render shows the DNS records. At your registrar add:

   | Type | Name | Value |
   |---|---|---|
   | `CNAME` | `www` | `<your-service>.onrender.com` |
   | `A` (or `ALIAS`/`ANAME`) | `@` | the IP/target Render shows |

3. Wait for the status to turn **Verified** (minutes to ~1 hour).
   Render issues the HTTPS certificate automatically.
4. Set `APP_URL=https://haythemaljane.com` in the service environment
   (the entrypoint otherwise uses `RENDER_EXTERNAL_URL`).

## 4. Free-tier limitations and fixes

| Problem | Fix |
|---|---|
| Site sleeps after 15 min idle → first visit takes 30–50 s | Upgrade the web service to **Starter** (~$7/mo) |
| Free Postgres is deleted after 90 days | Upgrade the database to **Basic-256mb** before day 90, or export/import |
| Contact form emails go to spam | Use a dedicated sender (Resend / Brevo free tier) instead of Gmail SMTP |

## 5. Checklist after going live

- [ ] `https://your-domain` loads with a padlock, `http://` redirects to `https://`
- [ ] `/login` works with `ADMIN_EMAIL` + `ADMIN_PASSWORD`
- [ ] Send a test message from the contact form; it arrives at `CONTACT_EMAIL` and shows in **Admin → Messages**
- [ ] Update the LinkedIn/GitHub profile links to the new domain
- [ ] Add the domain to the CV PDF (`public/CV_Haythem_Aljane.pdf`)
