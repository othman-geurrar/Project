import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductCard1({name , imageURL ,color , stars , oldPrice , newPrice , id}) {
  return (
    <div className="relative group w-fit h-fit rounded-lg overflow-hidden shadow-lg">
        <div className="absolute top-4 right-4 z-10">
        <Link to={`/products/${id}`} >
          <a className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-600 text-gray-50  focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300">
            <EyeIcon className="w-5 h-5" />
            <span className="sr-only">View product</span>
          </a>
        </Link>
      </div>
    <Card sx={{ maxWidth: 345 , minHeight: 460 }}>
        
      <CardMedia
        component="img"
        height="300"
        image={imageURL[0]}
        alt="925 Sterling Silver Bracelet"
        sx={{ objectFit: 'cover', aspectRatio: '418/300' }}
      />
      
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        
        {color?.map((value)=>
        { return <span className="mr-2"><i className="fa-solid fa-circle" style={{ color: value }}></i></span>}
        
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 ${index < stars ? "fill-yellow-500" : "fill-muted stroke-muted-foreground"}`}
              />
            ))}
          <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
            ({stars})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2 }}>
          <Typography variant="h5" component="div" color="textPrimary">
            {newPrice} MAD
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ textDecoration: 'line-through', ml: 1 }}
          >
            {oldPrice} MAD
          </Typography>
          <Typography variant="body2" color="error" sx={{ ml: 1 }}>
            (15% off)
          </Typography>
        </Box>
      </CardContent>
    </Card>
    </div>
  );
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
    );
  }
  
  
function EyeIcon(props) {
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
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }