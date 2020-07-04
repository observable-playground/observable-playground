import { GistContainer } from "../../Gist/Gist/Gist.container";
import { useRouter } from "next/router";

export default () => {
    const router = useRouter();
    const id = router.query.id;
    return <GistContainer gistId={id} />
}