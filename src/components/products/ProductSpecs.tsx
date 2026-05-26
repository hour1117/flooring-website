import { localizedValue } from '@/lib/utils';
import type { ProductSpec, Locale } from '@/types';

interface Props {
  specs: ProductSpec[];
  locale: Locale;
}

export default function ProductSpecs({ specs, locale }: Props) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <tbody>
          {specs.map((spec, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-5 py-3 font-medium text-gray-700 w-1/3">
                {localizedValue(spec.name, locale)}
              </td>
              <td className="px-5 py-3 text-gray-600">
                {localizedValue(spec.value, locale)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
