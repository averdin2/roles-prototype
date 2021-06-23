import { useRouter } from 'next/router';

export default function role() {
  const router = useRouter();
  const { id } = router.query;
  return <div>This is post {id}</div>;
}
