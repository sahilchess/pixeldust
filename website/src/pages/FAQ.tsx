export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-16 text-xl text-black">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">FAQ</h1>

        <h2 className="mb-2 text-xl font-semibold">When is this due?</h2>
        <p className="mb-4">The deadline is April 13, 2025</p>

        <h2 className="mb-2 text-xl font-semibold">Is hakatime required?</h2>
        <p className="mb-4">No.</p>

        <h2 className="mb-2 text-xl font-semibold">What do I get?</h2>
        <p className="mb-4">I will ship you enough parts to assemble 1 pcb, and 2 unassembled pcbs</p>
      </div>
    </div>
  );
}
