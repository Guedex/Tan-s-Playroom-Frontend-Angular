/**
 * Reads plain text, JSON message or Angular HttpErrorResponse bodies for user-facing dialogs.
 */
export function extractHttpErrorText(err: unknown): string | undefined {
  const e = err as { error?: unknown; message?: string };
  if (typeof e?.error === 'string' && e.error.trim().length > 0) {
    return e.error.trim();
  }
  const body = e?.error as { message?: string } | undefined;
  if (typeof body?.message === 'string' && body.message.trim().length > 0) {
    return body.message.trim();
  }
  if (typeof e?.message === 'string' && e.message.trim().length > 0) {
    return e.message.trim();
  }
  return undefined;
}

/**
 * Detects Hibernate/JPA or DB messages like FK violations on delete (e.g. client/game in use by LOAN).
 */
export function isReferentialIntegrityDeleteError(err: unknown): boolean {
  const chunks: string[] = [];
  const t = extractHttpErrorText(err);
  if (t) {
    chunks.push(t);
  }
  const e = err as { error?: unknown; message?: string };
  if (e?.error != null && typeof e.error !== 'string') {
    try {
      chunks.push(JSON.stringify(e.error));
    } catch {
      /* ignore */
    }
  }
  if (typeof e?.message === 'string') {
    chunks.push(e.message);
  }
  const hay = chunks.join(' ').toLowerCase();
  if (!hay) {
    return false;
  }
  return (
    hay.includes('23503') ||
    hay.includes('referential integrity') ||
    hay.includes('integridad referencial') ||
    hay.includes('restricción de integridad') ||
    hay.includes('foreign key') ||
    hay.includes('could not execute statement') ||
    (hay.includes('constraint') && hay.includes('loan')) ||
    (hay.includes('loan') && hay.includes('foreign'))
  );
}
