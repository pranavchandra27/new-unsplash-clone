import { useEffect, useState } from "react";
import ModalContent from "@components/Modal/ModalContent";
import PhotoModal from "@components/Modal/PhotoModal";
import { useRouter } from "next/router";

const Photo = () => {
    const [photoData, setPhotoData] = useState(null);
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        if (query && query.id) {
            (async () => {
                try {
                    const res = await fetch(`/api/photos/${query.id}`);
                    const { response } = await res.json();

                    setPhotoData(response);
                } catch (error) {
                    alert(JSON.stringify(error));
                }
            })();
        }
    }, [query]);

    return (
        // <PhotoModal open={true} onClose={() => router.back()}>
        //     {photoData ? (
        //         <ModalContent photo={photoData} />
        //     ) : (
        //         <h1 className="text-4xl">No Photo</h1>
        //     )}
        // </PhotoModal>
        photoData ? (
            <div className="p-4">
                <ModalContent photo={photoData} />
            </div>
        ) : (
            <h1 className="text-4xl">No Photo</h1>
        )
    );
};

export default Photo;
