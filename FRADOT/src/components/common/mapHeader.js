import { useRouter } from "next/router";
import { forwardRef } from "react";
import { HeaderDiv, HeaderWrap, Img, Menu2 } from "@/styles/common/mapHeader.styles";

const MapHeader = forwardRef((props, ref) => {
    const router = useRouter();

    const homeBtn = () => {
        router.push("/");
    };

    const map1Btn = () => {
        router.push("/map1");
    };

    const map2Btn = () => {
        router.push("/map2");
    };

    const aboutBtn = () => {
        router.push("/AboutUs");
    };

    return (
        <HeaderWrap ref={ref}>
            <HeaderDiv>
                <Img onClick={homeBtn} isHeaderLogo></Img>

                <Menu2>
                    <p onClick={map1Btn}>동네찾기</p>
                </Menu2>
                <Menu2>
                    <p onClick={map2Btn}>인프라 찾기</p>
                </Menu2>
                <Menu2>
                    <p onClick={aboutBtn}>About us</p>
                </Menu2>
            </HeaderDiv>
        </HeaderWrap>
    );
});

export default MapHeader;
