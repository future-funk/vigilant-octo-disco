import { requiredStringZschema } from './requiredStringZschema'
import { z, ZodType } from 'zod'

//this is applicable only to ADD/PJV, DIV and SOFT
export const masterProjZschema = {
  masterProjectCode: requiredStringZschema,
  masterProjectName: z.string().optional().nullable(),
  embeddedOpco: z.boolean().nullable().optional(),
  discretionAbilityScale: z.string().optional().nullable(),
  developmentAum: z.number().nullable().optional(),
  parentGroupId: z.string().nullable().optional(),
  programmaticJv: z.boolean().nullable().optional(),
  promoteStructure: z.boolean().nullable().optional(),
  promoteCurrency: z.string().nullable().optional(),
  mgmtTeam: z.string().nullable().optional(),
}

export const masterProjApprovalZschema = {
  tic: z.number().nullable().optional(),
  nec: z.number().nullable().optional(),
  originalNec: z.number().nullable().optional(),
  originalNecUsd: z.number().nullable().optional(),
  originalTic: z.number().nullable().optional(),
  originalTicUsd: z.number().nullable().optional(),
  divAum: z.number().nullable().optional(),
  divGaum: z.number().nullable().optional(),
}
export const masterProjUwZschema = {
  netEquityIrr: z.number().nullable().optional(),
  riskHurdleRate: z.number().nullable().optional(),
  gicInterest: z.number().nullable().optional(),
  originalNecUsd: z.number().nullable().optional(),
  originalTic: z.number().nullable().optional(),
  originalTicUsd: z.number().nullable().optional(),
}
