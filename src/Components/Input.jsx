import React from "react";
import '../Styles/Input.scss'
export default function Input({placeholder,label,CastomCss,type,...rest}) {
  return (
    <div className="Input mt-5">
       <div className="form-control">
        <label className="label">
            <span className="label-text text-lg font-bold text-sky-400">{label}</span>
         </label>
         <input type={type} {...rest} placeholder={placeholder} className={`${CastomCss} focus:border-[#1bc0e2] focus:outline-none rounded-none  placeholder:text-black placeholder:text-sm border-2 input input-ghost w-full`}/>
      </div>
    </div>
  );
}
