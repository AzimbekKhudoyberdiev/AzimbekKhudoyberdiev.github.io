# Azimbek Khudoyberdiev — GitHub Pages Website

This is a static GitHub Pages website designed for an academic/research portfolio with media-rich project pages.

## What is included

- `index.html` — homepage with hero section, news, research agenda, projects, publications, teaching, skills, patents, and contact.
- `projects/` — individual pages for GFlowLoc, PLUS-CODE+, CLOUD-CODEC, CogniMoE, MirrorVision, and Smart Farming/IoT.
- `assets/css/styles.css` — full responsive design with dark mode.
- `assets/js/main.js` — mobile navigation, dark mode toggle, publication filters.
- `assets/img/projects/` — editable SVG placeholders for project thumbnails.
- `assets/video/README.md` — where to add demos and paper result videos.
- `assets/cv/README.md` — where to add a sanitized public CV.

## Publish at `https://YOUR_USERNAME.github.io/`

1. Create a GitHub repository named exactly `YOUR_USERNAME.github.io`.
2. Upload the contents of this folder to the repository root. Do not upload the outer folder itself.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/root`, then save.
7. Visit `https://YOUR_USERNAME.github.io/` after GitHub finishes publishing.

## Customize before publishing

### Required

- Replace `assets/img/profile-placeholder.svg` with a professional profile photo.
- Replace placeholder GitHub link in `index.html` with your real GitHub URL.
- Add ORCID, LinkedIn, Google Scholar, DBLP, ResearchGate, or lab links if desired.
- Add a sanitized CV at `assets/cv/Azimbek_Khudoyberdiev_CV.pdf`.
- Verify patent metadata before making the patent entry public.

### Recommended media

Add paper/project media to the project pages:

- GFlowLoc: trajectory comparisons, modality weights, failure-case videos.
- PLUS-CODE+: rover demo video, vRTK pipeline figure, map-matching and error plots.
- CLOUD-CODEC: original versus reconstructed traffic clips, compression chart, DNN segmentation diagram.
- CogniMoE: scalogram examples, MoE-gating plots, dataset-level result charts.
- MirrorVision: direct/mirror-view examples, elevator occlusion cases, model-comparison chart.
- Smart Farming & IoT: sensor architecture, controller time-series plots, deployment photos.

Use only media that you own, created yourself, or have permission to reuse. For paper figures, confirm publisher and coauthor permissions.

## SEO checklist

- Update `<meta property="og:image">` if you replace `assets/img/og-card.svg`.
- Update schema.org JSON-LD in `index.html` with your final links.
- Keep paper DOI links stable.
- Avoid exposing private phone numbers on the public website.

## Optional custom domain

If you purchase a domain, create a `CNAME` file in the repository root containing the domain, for example:

```text
azimbek.dev
```

Then configure the domain in **Settings → Pages** and verify it in your GitHub account settings.
