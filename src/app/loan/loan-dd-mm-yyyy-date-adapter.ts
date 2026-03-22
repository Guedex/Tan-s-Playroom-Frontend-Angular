import { Injectable, Optional, Inject } from '@angular/core';
import { MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';

/**
 * Formats datepicker input/display as dd-MM-yyyy (aligned with table date pipe).
 */
@Injectable()
export class LoanDdMmYyyyDateAdapter extends NativeDateAdapter {
    constructor(@Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: string) {
        super(matDateLocale);
    }

    override format(date: Date, displayFormat: object): string {
        if (!this.isValid(date)) {
            return '';
        }
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        return `${this.pad2(d)}-${this.pad2(m)}-${y}`;
    }

    override parse(value: unknown): Date | null {
        if (value instanceof Date && !isNaN(value.getTime())) {
            return value;
        }
        if (typeof value === 'string' && value.trim()) {
            const parts = value.trim().split(/[-/.]/);
            if (parts.length === 3) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const year = parseInt(parts[2], 10);
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    const d = new Date(year, month, day);
                    return isNaN(d.getTime()) ? null : d;
                }
            }
        }
        return super.parse(value as any);
    }

    private pad2(n: number): string {
        return n < 10 ? '0' + n : String(n);
    }
}
