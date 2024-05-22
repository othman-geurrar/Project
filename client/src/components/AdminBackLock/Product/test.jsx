/**
 * v0 by Vercel.
 * @see https://v0.dev/t/d8SjXcfWwku
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4">
        <img
          alt="Product Image"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={800}
          src="/placeholder.svg"
          width={800}
        />
        <div className="flex gap-4 overflow-x-auto">
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-square object-cover"
              height={100}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 1</span>
          </button>
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-square object-cover"
              height={100}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 2</span>
          </button>
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-square object-cover"
              height={100}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 3</span>
          </button>
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-square object-cover"
              height={100}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 4</span>
          </button>
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-square object-cover"
              height={100}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 5</span>
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">Acme Prism T-Shirt: The Cozy Chromatic Blend</h1>
          <div>
            <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
        </div>
        <form className="grid gap-4 md:gap-10">
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
                    checkedIcon={<Done fontSize="xl2" />}
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
            <br />
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
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add to cart</button>
        </form>
      </div>
    </div>
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