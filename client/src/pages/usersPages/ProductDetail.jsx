import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/services/ProductData";
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Done from '@mui/icons-material/Done';
import { Footer, NavBaar } from '../../components';

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductByIdQuery(id);
  const [selectedColor, setSelectedColor] = useState("");
console.log(data?.size.map((pro)=> pro.value))
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const [mainImage, setMainImage] = useState('');
  useEffect(() => {
    if (data?.imageURL && data.imageURL.length > 0) {
      setMainImage(data.imageURL[0]);
    }
  }, [data]);
  console.log(data?.imageURL)

// Map over data?.imageURL to generate thumbnails array
const thumbnails = data?.imageURL.map((src, index) => ({
  src,
  alt: `Preview thumbnail ${index + 1}`,
})) || [];

const handleThumbnailClick = (src) => {
  setMainImage(src);
};
  const sizes = data?.size.map((pro)=> pro.value)
  // console.log(sizes)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading product data.</div>;
  }
  function isColorDark(color) {
    // Convert hex color to RGB
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
  
    // Calculate luminance
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance < 140;
  }
  
  return (
    <>
    <NavBaar />
    <div className=" grid my-16 md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div>
      <div className=" mt-2 grid  gap-4 "style={{ gridTemplateColumns: '1fr 4fr' }}>
       
        <div className="grid gap-4 overflow-x-auto h-full w-full">
          {thumbnails.map((thumbnail, index) => (
            <button
              key={index}
              className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50 h-full"
              onClick={() => handleThumbnailClick(thumbnail.src)}
            >
              <img
                alt={thumbnail.alt}
                className="aspect-square object-cover h-full"
                src={thumbnail.src}
              />
              <span className="sr-only">{thumbnail.alt}</span>
            </button>
          ))}
        </div>
        <img
          alt="Product Image"
          className=" h-full aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={100}
          src={mainImage}
          width={200}
        />
        
      </div>
     
      </div>
    <div className="grid gap-4  items-start">
      <div className="grid gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">{data?.newPrice} MAD</h1>
        <div>
          <p>{data?.category}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <StarIcon className="w-5 h-5 fill-amber-500" />
            <StarIcon className="w-5 h-5 fill-amber-500" />
            <StarIcon className="w-5 h-5 fill-amber-500" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
        </div>
      </div>
      <form className="grid gap-3">
      <FormLabel
            id="product-color-attribute"
            sx={{
              mb: 1.5,
              fontWeight: 'xl',
              textTransform: 'uppercase',
              fontSize: 'xs',
              letterSpacing: '0.1em',
            }}
          >
            Color
          </FormLabel>
          <RadioGroup
  aria-labelledby="product-color-attribute"
  value={selectedColor}
  onChange={handleColorChange}
  sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
>
  {data?.color.map((color) => (
    <Sheet
      key={color}
      sx={{
        position: 'relative',
        width: 40,
        height: 40,
        flexShrink: 0,
        backgroundColor: color,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Radio
        overlay
        variant="solid"
        color={color}
        checkedIcon={
          <Done fontSize="xl2" sx={{ color: isColorDark(color) ? 'white' : 'black' }} />
        }
        value={color}
        slotProps={{
          input: { 'aria-label': color },
          radio: {
            sx: {
              display: 'contents',
              '--variant-borderWidth': '2px',
            },
          },
        }}
        sx={{
          '--joy-focus-outlineOffset': '4px',
          '--joy-palette-focusVisible': (theme) =>
            theme.vars.palette[color],
          [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
            outlineWidth: '2px',
          },
        }}
      />
    </Sheet>
  ))}
</RadioGroup>

          <FormLabel
            id="product-size-attribute"
            sx={{
              mb: 1.5,
              fontWeight: 'xl',
              textTransform: 'uppercase',
              fontSize: 'xs',
              letterSpacing: '0.1em',
            }}
          >
            Size
          </FormLabel>
          <RadioGroup
            aria-labelledby="product-size-attribute"
            defaultValue="M"
            sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
          >
            
            {sizes?.map((size) => (
              <Sheet
                key={size}
                sx={{
                  position: 'relative',
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '--joy-focus-outlineOffset': '4px',
                  '--joy-palette-focusVisible': (theme) =>
                    theme.vars.palette.neutral.outlinedBorder,
                  [`& .${radioClasses.checked}`]: {
                    [`& .${radioClasses.label}`]: {
                      fontWeight: 'lg',
                    },
                    [`& .${radioClasses.action}`]: {
                      '--variant-borderWidth': '2px',
                      borderColor: 'text.secondary',
                    },
                  },
                  [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                    outlineWidth: '2px',
                  },
                }}
              >
                <Radio color="neutral" overlay disableIcon value={size} label={size} />
              </Sheet>
            ))}
          </RadioGroup>
          <div className="grid gap-2">
          <label className="text-base" htmlFor="quantity">Quantity</label>
          <select className="w-24 border rounded-md p-2" defaultValue="1" id="quantity">
            {[...Array(data?.productQuantity).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <button type="submit" className=" mr-20 py-2 bg-blue-600 text-white rounded-lg" aria-live="assertive">Add to cart</button>
       
      </form>
    </div>
  </div>
  <Footer />
  </>
)
}

function StarIcon(props) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
}

export default ProductDetail;