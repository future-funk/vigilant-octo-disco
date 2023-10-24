export const ERROR_MESSAGES = {
  //ui errors
  //ToDo: It is copied from BP1.0. need to change the key
  lessThanTIC: 'NEC must be less than TIC.',
  lessThanEqSoftTIC: 'Soft NEC must be less than or equal to Soft TIC.',

  softLessThanTIC: 'Soft TIC must be less than or equal to TIC.',
  softLessThanDL:
    'Soft DL(Recourse) must be less than or equal to DL(Recourse).',
  softLessThanIDL:
    'Soft IDL(Recourse) must be less than or equal to IDL(Recourse).',
  duplicateProjName: 'Project name already exist.',
  gicInterestRangeError: 'It must be between 0% and 100%.',
  lessThanStartDate: 'End date must be behide start date.',
  summOfRecourseShouldEqToTIC:
    'Please ensure TIC = NEC + DL(Recourse) + IDL(Recourse).',
  AUMlessThanFullAmount: "AUM can't be larger than the full amount.",
  GAUMlessThanFullAmount: "GAUM can't be larger than the full amount.",
  backtrackIndicative: 'Cannot be before Send Approval Note date',
  backtrackCurrentIndicative: 'Cannot be backdated',
  over5BDIndicative: 'Cannot be more than 5BD after Deal Closing',
  beforeDealApprovalIndicatve: 'Cannot be before Deal Approved date',
  summOfSoftRecourseShouldEqToTIC:
    'Please ensure Soft TIC = Soft NEC + Soft DL(Recourse) + Soft IDL(Recourse).',

  detailsOfOthersLengthExceeded: 'Details of Others length must be < 128',
  shareholdingNumberRangeError: 'It must be between 0% to 100%',

  lessSoftThanNec: 'Soft NEC must be less than or equal to NEC.',
  failedScrValidate: 'Invalid TIC amount',
  errorScrValidate: 'Error occured while validating',
  //BE error code
  1004: 'Required.',
  1014: 'Validation is failed.',
  1015: 'Invalid character count.',
  1016: 'Invalid data type.',
  1017: 'Invalid amount data.',
  1018: 'NEC must be less than TIC.',
  1019: 'TIC must be greater than NEC.',
  1035: 'Soft TIC must be less than or equal to TIC.',
}
