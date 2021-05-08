import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/a" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          <a>b</a>
        </Link>
      </li>
      <li>
        <Link href="/c" as="/c">
          <a>c</a>
        </Link>
      </li>
      <li>
        <Link href="/d" as="/d">
          <a>d</a>
        </Link>
      </li>
    </ul>
  )
}
