import "./Notes.css";
import { RichTextEditor, NotesList } from "frontend/components";
const notes = [
  '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/H2N_LR4Kimg?showinfo=0"></iframe><p>adasdasd</p>',
  '<p><span class="ql-size-huge">asdsadasdasdadasd</span>sdsdadsadada</p>',
  "<ol><li>sajdhasjdhladhasd</li><li>ahdjkahdjkahdjkahda</li><li>akdhajkdkjadhkjad</li></ol>",
  '<h1 class="ql-align-center"><span class="ql-size-large">Heading</span></h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</p><p>molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p><p>numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p><p>optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis</p><p>obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam</p><p>nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,</p><p>tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,</p><p>quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos&nbsp;</p><p>sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam</p><p>recusandae alias error harum maxime adipisci amet laborum. Perspiciatis&nbsp;</p><p>minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit&nbsp;</p><p>quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur&nbsp;</p><p>fugiat, temporibus enim commodi iusto libero magni deleniti quod quam&nbsp;</p><p>consequuntur!</p>',
];
const Notes = () => {
  return (
    <div className="d-flex notes-page-wrapper align-center flex-col w-100">
      <RichTextEditor />
      <NotesList notes={notes} />
    </div>
  );
};
export { Notes };
