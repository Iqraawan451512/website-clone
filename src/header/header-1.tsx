function Header(){
    return(
        <main className="border-gray-50">
            <div className=" flex ml-12 gap-4 justify-items-center border-b h-16 pt-5 ">
                <div className="items ">
                    <select  value="groceries" className="items w-32 border border-gray-500 bg-cyan-900 text-white px-2 ">
                    <option value="potato" className="bg-slate-50 text-black" >Groceries</option>
                    <option value="tomato"className="bg-slate-50 text-black" >tomato</option>
                    <option value="onion"className="bg-slate-50 text-black" >onion</option>
                    <option value="ginger"className="bg-slate-50 text-black" >ginger</option>
                    <option value="ginger"className="bg-slate-50 text-black" >garlic</option>
                    <option value="ginger"className="bg-slate-50 text-black" >potato</option>
                    <option value="ginger"className="bg-slate-50 text-black" >chills</option>
                    <option value="ginger"className="bg-slate-50 text-black" >lady Fingers</option>

                    </select>
                </div>
                <div className=" ">
                    <select value="Premium fruits" className="items w-32 border border-gray-200 bg-slate-200 text-slate-900 px-2"> 
                        <option value="Premium Fruits" className="bg-slate-50 text-black">Premium Fruits</option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">apples</option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">Gava</option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">Pine Apple </option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">Grapes</option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">Premium Fruits</option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">oranges</option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">charry</option>
                        <option value="Premium Fruits" className="bg-slate-50 text-black">strawbarrey</option>

                    </select>
</div>
               <div>
                    <select value="Home & Kitchen"className="items w-33 border border-slate-200 bg-slate-200 text-slate-900 px-2">
                    <option value="potato" className="bg-slate-50 text-black " >Home & Kitchen</option>
                    <option value="tomato" className="bg-slate-50 text-black">Decoration peaces</option>
                    <option value="onion" className="bg-slate-50 text-black">Kitchen Iteams</option>
                    <option value="ginger" className="bg-slate-50 text-black"> Curtons </option>
                    </select>
                </div>
                <div>
                    <select value="Fashion"className="items w-32 border border-slate-200 bg-slate-200 text-slate-900 px-2">
                    <option value="potato" className="bg-slate-50 text-black" >Clotes</option>
                    <option value="tomato" className="bg-slate-50 text-black">Shoes</option>
                    <option value="onion" className="bg-slate-50 text-black">Hand Bags</option>
                    <option value="ginger" className="bg-slate-50 text-black">Jewerally</option>
                    </select>
                </div>
                <div>
                    <select value= "Electronics"className="items w-32 border border-slate-200 bg-slate-200 text-slate px-2">
                    <option value="potato" className="bg-slate-50 text-black">electronics</option>
                    <option value="tomato" className="bg-slate-50 text-black">Refregraters</option>
                    <option value="onion" className="bg-slate-50 text-black">Washing Machines</option>
                    <option value="ginger" className="bg-slate-50 text-black">Fans</option>
                    <option value="ginger" className="bg-slate-50 text-black">Dish Washer</option>
                    <option value="ginger" className="bg-slate-50 text-black">Air Conditions</option>
                    <option value="ginger" className="bg-slate-50 text-black">Electric Stoves </option>

                    </select>
                </div><div>
                    <select value="Beauty"className="items w-32 border border-slate-200 bg-slate-200 text-slate px-2">
                    <option value="potato" className="bg-slate-50 text-black">beauty</option>
                    <option value="tomato " className="bg-slate-50 text-black">Skin Care</option>
                    <option value="onion" className="bg-slate-50 text-black ">Masseger</option>
                    <option value="ginger" className="bg-slate-50 text-black">Makeup</option>
                    </select>
                </div>
                <div>
                <select value="Home Impronment" className="items w-32 border border-slate-200 bg-slate-200 text-slate px-2" >
                <option value="potato"className="bg-slate-50 text-black"  >Frozan Meals</option>
                <option value="tomato"className="bg-slate-50 text-black" >Beaf Dumplings</option>
                <option value="onion"className="bg-slate-50 text-black" >Mashed Potatos</option>
                <option value="ginger"className="bg-slate-50 text-black" >Chicken Tenders</option>
                <option value="ginger"className="bg-slate-50 text-black" >Chicken rashmi kabab</option>
                <option value="ginger"className="bg-slate-50 text-black" >Chicken Dumplings</option>
                <option value="ginger"className="bg-slate-50 text-black" >Chicken rolls</option>

                </select>
            </div>
            <div>
                    <select value=" sports & toys"className="items w-32 border border-slate-200 bg-slate-200 text-slate px-2" >
                    <option value="potato" className="bg-slate-50 text-black">Sports & Toys</option>
                    <option value="tomato"className="bg-slate-50 text-black" >Electronic toys</option>
                    <option value="onion"className="bg-slate-50 text-black" >Educational Toys</option>
                    <option value="onion"className="bg-slate-50 text-black" >Dolls</option>
                    <option value="onion"className="bg-slate-50 text-black" >Sports items</option>

                    </select>
                </div>


            </div>
        </main>
    )


}
export default Header