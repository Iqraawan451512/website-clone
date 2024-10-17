import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import Link from "next/link";




function Footer(){
    return(
        <main>
            <div className="foot flex bg-slate-700 text-white">
                <div className="foot-1 mt-5 ml-10">
              <Link href="" className=" fot font-bold"> MegaMart</Link>
               <p className="flex gap-2 foo"> FaFacebook<FaFacebook className="ico" /></p>
               <p className="flex gap-2 foo"> instagram <RiInstagramFill  className="ico"/></p>
               <p className="flex gap-2 foo">Twitter   <FaSquareXTwitter className="ico" /></p>
               <p className="flex gap-2 foo "> Gmail  <CgMail className="ico" /></p>  
</div>
<div className="foot-2 ml-28 mt-8">
<div className="topic">
    <p className="more underline font-semibold mb-2">Most Popular Categaries</p>
    <ul className="foo">
        <li>Baby Care Items</li>
        <li>Skin Care Items</li>
        <li>Groceries</li>
        <li>Sports</li>
        <li>Kitchen Items</li>
        <li>Jewerally</li>
    </ul>
</div>
</div>
<div className="foot-2 ml-28 mt-8">
<div className="topic">
    <p className="more underline font-semibold mb-2">Customer Service</p>
    <ol className="foo">
        <li>about</li>
        <li>Term And Conditions</li>
        <li>our Services</li>
        <li>E waste Policy</li>
        <li>Cancilation And Return Policy</li>
        <li>FaQ</li>
    </ol>
</div>
</div>

                </div>
            
        </main>
    )
}
export default Footer