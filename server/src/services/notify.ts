/**
 * Called after a lead is saved. Only logs for now (no personal data in the log).
 * To email the sales team, send the message from here with an email service (e.g. SMTP, Brevo or Resend).
 */
export function notifyNewLead(type: string, id: string) {
  console.info(`New ${type} lead received (${id})`)
}
