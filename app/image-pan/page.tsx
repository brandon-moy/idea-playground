function ImagePan() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="aspect-card w-[300px] md:w-[500px] border border-green-300 rounded-2xl border-opacity-80 bg-green-300 bg-opacity-30 overflow-hidden relative">
        <div className="absolute w-full h-full top-0 left-0 opacity-60 sepia-[40%] bg-[url('/forest.jpg')] bg-[300%] bg-center animate-[cardImagePan_15s_linear_infinite]" />
        <div className="bg-card-gradient w-full h-full bg-shrink animate-[cardPan_30s_linear_infinite] absolute top-0 left-0" />
      </div>
    </div>
  );
}

export default ImagePan;
