import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Band } from './../models/interface-band';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor() { }
  public bandsData = new BehaviorSubject<Band[]>([
    {
      id: 1,
      name: 'The Rolling Stones',
      country: 'England',
      history: 'Keith Richards and Mick Jagger became childhood friends and classmates in 1950 in Dartford, Kent. The Jagger family moved to Wilmington, Kent, five miles (8.0 km) away, in 1954. In the mid-1950s, Jagger formed a garage band with his friend Dick Taylor; the group mainly played material by Muddy Waters, Chuck Berry, Little Richard, Howlin Wolf and Bo Diddley. Jagger met Richards again on 17 October 1961 on platform two of Dartford railway station.[8] The Chuck Berry and Muddy Waters records Jagger was carrying revealed a shared interest. A musical partnership began shortly afterwards. Richards and Taylor often met Jagger at his house. The meetings moved to Taylor house in late 1961 where Alan Etherington and Bob Beckwith joined the trio.',
      video: '9g7RmKF-gRI',
      members: [
        { id: Math.random(), name: 'Mick Jagger', instrument: 'Vocals' },
        { id: Math.random(), name: 'Keith Richards', instrument: 'Guitar' },
        { id: Math.random(), name: 'Ronnie Wood', instrument: 'Bass' },
        { id: Math.random(), name: 'Charlie Watts', instrument: 'Drums' }
      ]
    },
    {
      id: 2,
      name: 'Led Zeppelin',
      country: 'England',
      history: 'In 1966, London-based session guitarist Jimmy Page joined the blues-influenced rock band the Yardbirds to replace bassist Paul Samwell-Smith. Page soon switched from bass to lead guitar, creating a dual lead guitar line-up with Jeff Beck. Following Beck departure in October 1966, the Yardbirds, tired from constant touring and recording, began to wind down. Page wanted to form a supergroup with Beck and him on guitars, and the Whos Keith Moon and John Entwistle on drums and bass, respectively. Vocalists Steve Winwood and Steve Marriott were also considered for the project. The group never formed, although Page, Beck, and Moon did record a song together in 1966, Beck Bolero, in a session that also included bassist-keyboardist John Paul Jones.',
      video: 'xbhCPt6PZIU',
      members: [
        { id: Math.random(), name: 'Robert Plant', instrument: 'Vocals' },
        { id: Math.random(), name: 'Jimmy Page', instrument: 'Guitar' },
        { id: Math.random(), name: 'John Paul Jones', instrument: 'Bass' },
        { id: Math.random(), name: 'John Bonham', instrument: 'Drums' },
      ]
    },
    {
      id: 3,
      name: 'Queen',
      country: 'England',
      history: 'The founder members of Queen met in West London during the late 1960s. Guitarist Brian May had built his own guitar with his father in 1963, and formed the group 1984 the following year with singer Tim Staffell. May left the group in early 1968 to focus on his degree in Physics and Infrared Astronomy at Imperial College and find a group that could write original material. He formed the group Smile with Staffell and with keyboardist Chris Smith. To complete the line-up, May placed an advertisement on a college notice board for a Mitch Mitchell-Ginger Baker type drummer; Roger Taylor, a young dental student, auditioned and got the job. While attending Ealing Art College in west London, Staffell became friends with fellow student Freddie Bulsara, he join the group as lead singer.',
      video: 'g2N0TkfrQhY',
      members: [
        { id: Math.random(), name: 'Freddie Mercury', instrument: 'Vocals' },
        { id: Math.random(), name: 'Brian May', instrument: 'Guitar' },
        { id: Math.random(), name: 'John Deacon', instrument: 'Bass' },
        { id: Math.random(), name: 'Roger Taylor', instrument: 'Drums' },
      ]
    },
    {
      id: 4,
      name: 'Pink Floyd',
      country: 'England',
      history: 'Roger Waters and Nick Mason met while studying architecture at the London Polytechnic at Regent Street. They first played music together in a group formed by Keith Noble and Clive Metcalfe with Noble sister Sheilagh. Richard Wright, a fellow architecture student, joined later that year, and the group became a sextet, Sigma 6. Waters played lead guitar, Mason drums, and Wright rhythm guitar since there was rarely an available keyboard. The band performed at private functions and rehearsed in a tearoom in the basement of the Regent Street Polytechnic. They performed songs by the Searchers and material written by their manager and songwriter, fellow student Ken Chapman.',
      video: 'YR5ApYxkU-U',
      members: [
        {id: Math.random(), name: 'Roger Waters', instrument: 'Vocals/Bass'},
        {id: Math.random(), name: 'David Gilmour', instrument: 'Vocals/Guitar'},
        {id: Math.random(), name: 'Syd Barrett/David Gilmour', instrument: 'Vocals'},
        {id: Math.random(), name: 'Nick Mason', instrument: 'Drums'},
        {id: Math.random(), name: 'Richard Wright', instrument: 'Keyboards'},
      ]
    },
    {
      id: 5,
      name: 'Deep Purple',
      country: 'England',
      history: 'In 1967, former Searchers drummer Chris Curtis contacted London businessman Tony Edwards, in the hope that he would manage a new group he was putting together, to be called Roundabout. Curtis vision was a supergroup where the band members would get on and off, like a musical roundabout. Impressed with the plan, Edwards agreed to finance the venture with his two business partners John Coletta and Ron Hire, who comprised Hire-Edwards-Coletta Enterprises. During a brief tour of Denmark and Sweden in April, in which they were still billed as Roundabout, Blackmore suggested a new name Deep Purple, named after his grandmother favourite song. The group had resolved to choose a name after everyone had posted one on a board in rehearsal. Second to Deep Purple was Concrete God, which the band thought was too harsh to take on.',
      video: 'ikGyZh0VbPQ',
      members: [
        {id: Math.random(), name: 'Rod Evans', instrument: 'Vocals'},
        {id: Math.random(), name: 'Ritchie Blackmore', instrument: 'Guitar'},
        {id: Math.random(), name: 'Nick Simper', instrument: 'Bass'},
        {id: Math.random(), name: 'Ian Paice', instrument: 'Drums'},
        {id: Math.random(), name: 'Jon Lord', instrument: 'Keyboards'},
      ]
    },
    {
      id: 6,
      name: 'AC/DC',
      country: 'Australia',
      history: 'In November 1973, Malcolm and Angus Young formed AC/DC with bassist Larry Van Kriedt, vocalist Dave Evans, and ex-Masters Apprentices drummer Colin Burgess. Gene Pierson booked the band to play at Chequers nightclub on New Years Eve, 1973. By this time, Angus Young had adopted his characteristic school-uniform stage outfit. The idea was his sister Margarets. Angus had tried other costumes: Spider-Man, Zorro, a gorilla, and a parody of Superman, named Super-Ang. In its early days, most members of the band dressed in some form of glam or satin outfit. On stage, Evans was occasionally replaced by the bands first manager, Dennis Laughlin, who was the original lead singer with Sherbet. In Paul Stennings book AC/DC: Two Sides To Every Glory it was stated that Evans did not get along with Laughlin, which also contributed to the bands bitter feeling toward Evans.',
      video: 'l482T0yNkeo',
      members: [
        {id: Math.random(), name: 'Bon Scott/Brian Johnson', instrument: 'Vocals'},
        {id: Math.random(), name: 'Angus Young ', instrument: 'Guitar'},
        {id: Math.random(), name: 'Cliff Williams', instrument: 'Bass'},
        {id: Math.random(), name: 'Phil Rudd ', instrument: 'Drums'},
      ]
    },
    {
      id: 7,
      name: 'The Ramones',
      country: 'USA',
      history: 'The Ramones began taking shape in early 1974 when Cummings and Colvin invited Hyman to join them in a band. Colvin wanted to play guitar and sing, Cummings would also play guitar and Hyman would play drums. The lineup was to be completed with their friend Richie Stern on bass. However, after only a few rehearsals it became clear that Richie Stern could not play bass, so in addition to singing, Colvin switched from guitar to bass and Cummings became the only guitarist. Colvin was the first to adopt the name Ramone, calling himself Dee Dee Ramone. He was inspired by Paul McCartneys use of the pseudonym Paul Ramon during his Silver Beetles days. Dee Dee convinced the other members to take on the name and came up with the idea of calling the band the Ramones. Hyman and Cummings became Joey and Johnny Ramone, respectively.',
      video: 'xuOnePNlOgY',
      members: [
        {id: Math.random(), name: 'Joey Ramone(Jeffrey Hyman)', instrument: 'Vocals'},
        {id: Math.random(), name: 'Johnny Ramone (John Cummings)', instrument: 'Guitar'},
        {id: Math.random(), name: 'Dee Dee Ramone (Douglas Colvin)', instrument: 'Bass'},
        {id: Math.random(), name: 'Marky Ramone (Marc Bell)', instrument: 'Drums'}
      ]
    },
    {
      id: 8,
      name: 'Kiss',
      country: 'USA',
      history: 'Kiss traces its roots to Wicked Lester, a New York City-based rock band led by Gene Simmons and Paul Stanley. That band recorded one album, which was shelved by Epic Records, and played a handful of live shows. Simmons and Stanley, feeling a new musical direction was needed, abandoned Wicked Lester in 1972 and began forming a new group. After abandoning the name Wicked Lester late in 1972, Simmons and Stanley came across an ad in the East Coast version of Rolling Stone placed by Peter Criss, a drummer from the New York City scene who had previously played in the bands Lips and Chelsea. Simmons and Stanley met Criss in a nightclub where he was playing drums. After hearing Criss sing, they thought Criss should be in the new band they were forming. Criss then auditioned for, and later joined their new band. The three focused on a much harder style of rock than that played by Wicked Lester. In early January 1973, the group added lead guitarist Ace Frehley. Frehley impressed the group with his first audition, although he showed up wearing two different colored sneakers, one red and one orange. A few weeks after Frehley joined, the classic lineup was solidified as the band to be named Kiss.',
      video: 'EFMD7Usflbg',
      members: [
        {id: Math.random(), name: 'Gene Simmons', instrument: 'Vocals/Bass'},
        {id: Math.random(), name: 'Paul Stanley', instrument: 'Vocals/Guitar'},
        {id: Math.random(), name: 'Eric Carr ', instrument: 'Vocals/Drums'},
        {id: Math.random(), name: 'Peter Criss', instrument: 'Drums'}
      ]
    },
  ]);
  bands = this.bandsData.asObservable();

  newBands(newBand: Band[]) {
    this.bandsData.next(newBand);
  }
}
