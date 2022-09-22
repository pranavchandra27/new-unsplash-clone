import ModalContent from "@components/Modal/ModalContent";
import { fetcher } from "@utils/helpers";
import { useRouter } from "next/router";
import useSWR from "swr";
import { IPhotoProps } from "typings";

const Photo = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/photos/${id}`, fetcher);

  if (!data) return <p>Loading...</p>;

  const photo: IPhotoProps = data.response;

  return <ModalContent photo={photo} />;
};

export default Photo;
