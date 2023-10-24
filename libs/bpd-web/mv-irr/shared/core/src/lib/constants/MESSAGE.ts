export const MESSAGE = {
  UPLOAD_FY_NOTE:
    'Only upload dates within this FY or investment start/end dates.',
  UPLOAD_CF_NOTE:
    'All existing entries are overwritten. To delete an entry, remove its row in the template.',
  UPLOAD_REFRESH_NOTE:
    'IRR numbers will not be updated after the upload is done. Instead, all IRR numbers will be refreshed every 4 hours.',
  UPLOAD_BYPASS_NOTE: `"Refresh" button in Project View triggers real time calculation of return metrics. This will bypass the 4 hours cycle. Will only refresh by-project.`,

  IRR_XIRR_1Y:
    'For internal investment presentation purposes only. Will match Excel XIRR. Always annualized even for capital activity <1Y. =(1+XIRR)^(365.25/365)-1.',
  IRR_OFFICIAL_1Y:
    'GIC official method for reported IRR. De-annualized for Projects with <1Y of capital activity. Will match IRR (XIRR) if Project has >1Y of capital activity: =(1+XIRR)^(Days/365.25)-1',

  WHY_NO_IRR: {
    NO_RESULT: 'IRR not computed as start/end MVs or CFs are missing',
    IRR_HIDDEN: 'IRR(s) hidden as they exceed +/- 300%',
    IRR_X_HIDDEN: 'IRR(s) hidden as they exceed +/- 300%',
    IRR_ERROR: `IRR error. Check if Excel XIRR works with these MVs/CFs. Click on "Why no IRR?" for more info`,
  },
}
