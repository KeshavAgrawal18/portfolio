import Container from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#FAF8F5]">
      <Container>
        <div className="flex flex-col gap-3 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Keshav Agrawal.</p>

          <p>Built slowly, improved continuously.</p>
        </div>
      </Container>
    </footer>
  );
}
