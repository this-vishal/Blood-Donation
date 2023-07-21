import React,{useState,useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ReactPaginate from "react-paginate";
import "./gallery.css";
import img1 from "../../Assets/abccc.jpg";
import img2 from "../../Assets/rgdfv.jpg";
import img3 from "../../Assets/0002.jpg";
import img4 from "../../Assets/photo.webp";
import img5 from "../../Assets/dona456.png";
import img6 from "../../Assets/charu39028.jpg";
import img7 from "../../Assets/Blood239.jpg";
import img8 from "../../Assets/image21.webp";
import img9 from "../../Assets/AP_20049349092217.webp";
import img0 from "../../Assets/xyz.jpg";
import img11 from "../../Assets/women.jpg";
import img12 from "../../Assets/1212.jpg";
import img13 from "../../Assets/sadfghjk5y89.webp";
import img14 from "../../Assets/world.jpg";
import img15 from "../../Assets/blood-donation-camp-1.jpg";
import img16 from "../../Assets/donateblood.jpg";
import img17 from "../../Assets/blooodddd.jpg";
import img18 from "../../Assets/women2.jpg";
import img19 from "../../Assets/women00.jpg";
import img20 from "../../Assets/women1.jpg";
import img21 from "../../Assets/bloodd.jpg";
import img22 from "../../Assets/0000.jpg";
import img24 from "../../Assets/0001.jpg";
import img25 from "../../Assets/sadfghjk5y89.webp";
import img26 from "../../Assets/55555.jpg";
import img27 from "../../Assets/56565.jpg";

function Gallery() {
  const incomingData=[
    { id:"1",img:img1 },
    { id:"2",img:img2},
    { id:"3",img:img3},
    { id:"4",img:img4},
    { id:"5",img:img16},
    { id:"6",img:img6},
    { id:"7",img:img7},
    { id:"8",img:img8},
    { id:"9",img:img9},
    { id:"0",img:img0},
    { id:"11",img:img11},
    { id:"12",img:img12},
    { id:"13",img:img13},
    { id:"14",img:img14},
    { id:"15",img:img15},
    { id:"16",img:img5},
    { id:"17",img:img17},
    { id:"18",img:img18},
    { id:"19",img:img19},
    { id:"20",img:img20},
    { id:"21",img:img21},
    { id:"22",img:img22},
    // { id:"23",img:img23},
    { id:"24",img:img24},
    { id:"25",img:img25},
    { id:"26",img:img26},
    { id:"27",img:img27}
  ]
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(incomingData && incomingData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(incomingData && incomingData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % incomingData.length;
    setItemOffset(newOffset);
    scrollToTop()
  };

  return (
    <>
      <Navbar />
      <div className="gallery ">GALLERY </div>
      <div className="row">
        {
          currentItems.map((elm,ind)=>
          
          <div className="col-12 col-md-6 col-lg-4 p-2 ">
            <img src={elm.img} className=" img-scr  img-fluid" alt="" />
          </div>
         
          )
        }
     
      </div>
        <div className="react-pagination text-center">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}
                containerClassName="pagination d-flex align-items-center p-1"
                pageLinkClassName="page-num"
                nextLinkClassName="page-num"
                previousLinkClassName="page-num"
                activeLinkClassName="active"
              />
            </div>
      <Footer />
    </>
  );
}

export default Gallery;
