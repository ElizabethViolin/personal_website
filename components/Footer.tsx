import { Container } from "components/Container";

export default function Footer(): JSX.Element {
  return (
<footer className="mt-32">
  <Container>
    <div className="border-t border-zinc-100 pt-8 pb-16 dark:border-zinc-700/40">
      <Container>
        <div className="flex flex-col justify-center items-center gap-6 sm:flex-row">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} all rights reserved.
          </p>
        </div>
      </Container>
    </div>
  </Container>
</footer>

  );
}
