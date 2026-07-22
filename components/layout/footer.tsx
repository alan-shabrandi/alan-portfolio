export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} Alan. All rights reserved.
      </div>
    </footer>
  );
}
