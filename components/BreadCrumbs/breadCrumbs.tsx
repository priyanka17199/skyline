import useBreadCrumb from "../../hooks/general_hooks/breadcrumbs_hook";
import Link from "next/link";
const BreadCrumbs = () => {
    let breadcrumb = useBreadCrumb();
    let sub_sub_cat:String;
    console.log("Data from breadcrumbs - ",breadcrumb.data);
    breadcrumb.data?.map((item: any, index:number) => {
        if(item.name === null){
            sub_sub_cat = item.link.split('/')[4];
            console.log("sub sub cat ", sub_sub_cat)
            if (sub_sub_cat === undefined) {
                sub_sub_cat = item.link.split('/')[3];
            }
            console.log("Breadcrumb index If item - ", sub_sub_cat)
        }
        console.log(sub_sub_cat);
    })

    return (
        <section className="breadcrumb_section mb-3">
        <div className="container p-0">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" style={{fontSize: '18px'}} aria-hidden="true"></i></a></li>
                            {breadcrumb.data?.map((item: any, index: number) =>
                                <>
                                    <li key={index} className="breadcrumb-item active" aria-current="page">
                                        <Link href={item.link}>{item.name === null && 
                                        sub_sub_cat !== 'undefined'  ? "value is null" : item.name}</Link>
                                    </li>
                                </>
                            )}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    )


}

export default BreadCrumbs