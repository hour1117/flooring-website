import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <p className="text-6xl font-bold text-gray-200">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h1>
        <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
