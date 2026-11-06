const r=(e,p=40)=>String(e||"").trim().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"").slice(0,p);export{r as f};
