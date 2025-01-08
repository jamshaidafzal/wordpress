export default function HowItWorks() {
    return (
<>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        This text changes size based on the screen width.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="bg-blue-500">1</div>
  <div className="bg-blue-500">2</div>
  <div className="bg-blue-500">3</div>
  <div className="bg-blue-500">4</div>
</div>

      
</>
    );}