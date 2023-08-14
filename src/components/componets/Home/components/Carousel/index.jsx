

const Carousel = () => {

    return (
        <div>
            <img
                className="w-full h-[500px] object-cover"
                src="https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-260nw-1398700589.jpg"
                alt="No Found"
            />
            <div className=" w-[600px] absolute top-[25%] left-[10%]">
                <p className=" text-5xl font-parisienne">Beauty Kit</p>
                <p className=" text-justify mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo architecto odio autem nisi officiis fugit ullam
                    quasi qui excepturi amet reprehenderit quibusdam, ipsa
                    tenetur vero ab facere similique quam dolorem.
                </p>

                <button className="uppercase bg-black text-white w-40 h-8 mt-10">
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default Carousel;
