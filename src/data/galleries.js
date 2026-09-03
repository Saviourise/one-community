/*
 * Per-project photo galleries — real Google Drive image ids (public files).
 * Keyed by project slug. The detail page renders these as a stacked masonry
 * grid. Add/remove ids freely; swap for /public/assets paths to self-host.
 *
 * Note: Drive's thumbnail endpoint throttles under many simultaneous requests,
 * so gallery images lazy-load and fall back to a dummy photo if Drive drops one.
 * For production, self-hosting these is recommended.
 */

export const galleries = {
  'tedx-talk': [
    '1lcWYP0lwFs-PKvxamwrgw7tY-Sl2V0Tu',
    '13gOWNCfvm6HJH0CAt-YULL0RCtlv2KBB',
    '1pXrAdXDI3siS63PFG5t9fnCb8ZuVmIuQ',
    '16NAsvVojb4Tx6DfkHbOmBeEXnt3iRbVv',
    '10FYQsj-gLNRBrbhDuTsvgaHsN5FcSvvg',
    '1p8EqdJfXvIXv8Bi8x3rpROkHIMaMaRLN',
    '1ArggShtw4I-D-Boo8900vd01KTvNvgp2',
    '1MOXFGTkapSq9MV2SiOuz8jfRPT-k02VE',
    '1Yr3rAxsDyEa5vwLSoLVhe2vDLscSPoOk',
    '1NYek0rbDwIgJxmLzvgqJI_V7kHtsm84y',
    '17xgLGvA71HCN_s7A2QmfAXo_4TvYTkk2',
    '1tviLN_DQzcnQ4wwhCYkYs62BmRv0TTtn',
  ],
  'one-community-concert': [
    '11o1Y9DyJ0uFC2gPMrfD1jidsjIodfQTd',
    '1AX2V69JzWj260ZQbw9XqzskM9OILV6Jz',
    '1fKlHTcv-CkCoUDIwh3NgTeLCa1aNjbwh',
    '1i5-xdiVVBxdQ2Ou21-Glb9zD_nnXDn9d',
    '1QiHuNW92zn3Oq9JyPwUejX0J85wE2STb',
    '1cBVYBh6OEzQ4-1spQpsD9V_7FOvm2gYn',
    '1HKe9ip5wwBfm8Z1QdjAk2MjU7jQnoJaV',
    '1aOoRjHRda-QDPTzW0iwaMZURVSPq7hk1',
    '1mosF8TRE6eIxp36-XUw6gB4bq8LwtbG6',
    '1AHJmzLjAhYJG-qGeOy6sDDc1Byh_1FOy',
    '1YcxafpAsqiy0nURQwSu4gZonylwQRPAU',
    '1PzR5RWgy8FBcJwAO2w-6MR05jLI2-uFz',
  ],
  'tanz-gala': [
    '1UX47UeWL-DV3GVa0bp9S6IdDyU0H0N3N',
    '1Hc4FFxYquThjCkfvYqChhKhH7ooNkCwV',
    '1xVwtPVz6lb3thDL6qY1IaQUik8rk8MI5',
    '1Il9rpZUVB4qdtZcPZG7JRWd4cg17AdqZ',
    '10g2OPSWRnEaJlreYRgX6l9F5hSClxSMi',
    '1iS-ra7GvNSemG_Q5l-KW5jlW6P6PARg-',
    '1KXPqRLx3m7F2yJAuGq9KHY1FqPWo7YJE',
    '1M2ggpcv30oTIXADy_bv-395vG4izxQfr',
    '1XLAkmeCaPEKN1hztwk5ivOaxSLMA9BWx',
    '1miWpFw-EA1MktDdXyVswhN_qzhLdU2lX',
    '1FFD0n2WjTfXT0QHjpJ-vIm2VhwLb0B7s',
    '1zC_fjoRlgD-IdnhsrDK3wq2lUufD6wXx',
  ],
  'homies-and-omies': [
    '1Q2R2V6efyiwuywuV1WCKs_Ll20gS9EVW',
    '1ZTP8tDgRisIsvUXAEOV7KNrRp3zJNex2',
    '1BEXmdFzRLF7RZGVTGjA721gdEOOais8-',
    '16xaYOfXGpqlXH5R8Y_hRm1On4GT4osoL',
    '13KYxBUQ3H5kTDMhaMkWlGYqcoGmZJsgz',
    '1AzfmpiqAXd5Ab72gveHHOKM_CAPkbvT8',
    '1boJWjgssh_V7rkWnqNw4M9y8P75J18pi',
    '1xEEw_2Y29Rcbxn8UMXStcUcW7YueSpJ3',
    '1vCthuw3j95HyoHsUNvz1f5KhvipUYWO1',
    '1ZBNI4SDDMv1mdNU69fYG5vbjqZ9b-Izp',
    '1tmM34JYUj3sPWNOJ437hZqXfWSPGL9wb',
    '1tDEvGPsQFYWwWWp_4Ff3w8lqvRxEmqKn',
  ],
  'noch-einmal-walzer': [
    '1zgrgeWabwDJglJXqdGzHsMgnNFX_BY1H',
    '1FpFSeJzG9YBvFMukTsgLQLcEBTT1PQXN',
    '1pLh7EwkYQDJESOWJ80NFdYJ8XoV8cdfE',
  ],
  integrationspreis: [
    '1jLDOyNTnN_kKblSKjuGf_pf90wI1VIk4',
    '1J_efjdoxq0IKS15E14UPCsdZ6KTY2e1t',
    '1NNeOqgwnWq4OYAdnD3A40D9f7eYiHaBd',
    '1r-rJxrVMC7f99HFVmMidgpx0l0_fssUW',
  ],
}

export const getGallery = (slug) => galleries[slug] || []

/*
 * Photo credits shown beneath each gallery. Keyed by project slug; anything not
 * listed falls back to DEFAULT_CREDIT. Replace with the real photographer /
 * source names as they’re confirmed.
 */
const DEFAULT_CREDIT = 'One Community Project archive'
export const galleryCredits = {
  'tedx-talk': 'TEDxLinz',
  'tanz-gala': 'OCG Tanz Gala',
}
export const getGalleryCredit = (slug) => galleryCredits[slug] || DEFAULT_CREDIT
