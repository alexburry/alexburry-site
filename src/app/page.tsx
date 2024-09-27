export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Alex Burry</h1>
        <p>Full stack web developer and data enginer</p>
      </main>
      <footer className="mb-2">
        Made by <a href="https://github.com/alexburry">alexburry</a>
      </footer>
    </div>
  );
}
