function ImagePan() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="aspect-card w-[300px] md:w-[500px] border border-blue-300 rounded-2xl border-opacity-80 bg-blue-300 bg-opacity-30">
        <div className="bg-card-gradient w-full h-full overflow-hidden"></div>
      </div>
    </div>
  );
}

export default ImagePan;
