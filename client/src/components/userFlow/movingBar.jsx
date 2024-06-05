const movingBar = () => {
  return (
    <>
      <div className="relative flex overflow-x-hidden font-followus">
        <div className="py-8 animate-marquee whitespace-nowrap ">
          <span className="text-2xl mx-12">Traditionnel</span>
          <span className="text-2xl mx-12">Travel</span>
          <span className="text-2xl mx-12">Sport</span>
          <span className="text-2xl mx-12">Classy</span>
          <span className="text-2xl mx-12">Gothic</span>
          <span className="text-2xl mx-12">Anime</span>
         
        </div>
        <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
        <span className="text-2xl mx-12">Traditionnel</span>
          <span className="text-2xl mx-12">Travel</span>
          <span className="text-2xl mx-12">Sport</span>
          <span className="text-2xl mx-12">Classy</span>
          <span className="text-2xl mx-12">Gothic</span>
          <span className="text-2xl mx-12">Anime</span>
        </div>
      </div>
    </>
  );
}

export default movingBar