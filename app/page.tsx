import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <main className="flex flex-col items-center gap-8 text-center max-w-4xl">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="logo dimake.io"
            width={200}
            height={100}
            priority
            className="w-auto h-auto"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Disruptive makers, disruptive consulting
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mt-4">
          Conseil en transformation digitale
        </p>

        <div className="mt-8">
          <a
            href="mailto:contact@dimake.io"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            contact@dimake.io
          </a>
        </div>
      </main>
    </div>
  );
}
