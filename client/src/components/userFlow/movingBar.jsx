const movingBar = () => {
  return (
    <>
      <div className="relative flex overflow-x-hidden font-followus">
        <div className="py-8 animate-marquee whitespace-nowrap ">
          <span className="text-2xl mx-12">Vintage</span>
          <span className="text-2xl mx-12">Hippy</span>
          <span className="text-2xl mx-12">Hipster</span>
          <span className="text-2xl mx-12">Metal</span>
          <span className="text-2xl mx-12">Gothic</span>
          <span className="text-2xl mx-12">HipHop</span>
          <span className="text-2xl mx-12">Ultras</span>
        </div>
        <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
          <span className="text-2xl mx-12">Vintage</span>
          <span className="text-2xl mx-12">Hippy</span>
          <span className="text-2xl mx-12">Hipster</span>
          <span className="text-2xl mx-12">Metal</span>
          <span className="text-2xl mx-12">Gothic</span>
          <span className="text-2xl mx-12">HipHop</span>
          <span className="text-2xl mx-12">Ultras</span>
        </div>
      </div>
    </>
  );
}

export default movingBar
