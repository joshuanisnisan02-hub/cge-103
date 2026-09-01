const params=new URLSearchParams(location.search),weekNo=Math.min(18,Math.max(1,+params.get('week')||1)),sessionNo=Math.min(2,Math.max(1,+params.get('session')||1));
const week=COURSE.weeks[weekNo-1],s=week.sessions[sessionNo-1],deck=document.querySelector('#deck');document.title=`Week ${weekNo} Session ${sessionNo} · ${s.title}`;
const esc=x=>String(x).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
const bullets=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
const T={};
const teach=(key,d,problem,steps,answer,practice)=>T[key]={d,problem,steps,answer,practice};
teach('4-2',[
'Understanding means identifying the given facts, the unknown, the conditions, and the units before choosing any operation.',
'A plan is a defensible strategy such as drawing a diagram, making a table, finding a pattern, working backward, or writing an equation.',
'Carrying out the plan means following the chosen strategy carefully while keeping calculations and units visible.',
'Looking back means checking the result against every original condition and trying another method when possible.',
'Representations reduce confusion: words explain meaning, diagrams show structure, tables organize cases, and equations express relationships.'
],'A van charges ₱500 plus ₱25 per kilometer. How far can ₱1,250 cover?',['Let d be distance in kilometers.','Write 500+25d=1,250.','Subtract 500: 25d=750.','Divide by 25: d=30.','Check: 500+25(30)=1,250.'],'The van can travel 30 kilometers.','Solve a mobile-data-plan comparison using all four Polya steps.');
teach('5-1',[
'A population is the complete group of interest; a sample is the smaller group actually observed.',
'Categorical variables record labels or groups, while numerical variables record counts or measurements.',
'A representative random or stratified sample reduces selection bias; convenience and voluntary samples may distort results.',
'Frequency is a count; relative frequency is the count divided by the total and is often written as a percentage.',
'Ethical data collection gathers only necessary information, obtains consent, protects privacy, and reports limitations.'
],'Among 40 students, 18 ride jeepneys, 10 motorcycles, 8 walk, and 4 use other transport. Find relative frequencies.',['Confirm total: 18+10+8+4=40.','Divide each count by 40.','Convert to percentages.','Check that 45%+25%+20%+10%=100%.'],'Jeepney 45%, motorcycle 25%, walking 20%, other 10%.','Design a representative sample for estimating student travel time.');
teach('5-2',[
'The mean uses every value and describes balance, but extreme values can pull it toward a long tail.',
'The median is the middle ordered value and is usually more representative for skewed data; the mode is most frequent.',
'Range and interquartile range use positions; variance and standard deviation summarize spread around the mean.',
'Use bar charts for categories, histograms for numerical distributions, and line graphs for ordered change over time.',
'An honest graph has a clear title, units, labels, appropriate scale, and source without visual exaggeration.'
],'Compare the mean and median of 2, 3, 3, 4, and 20.',['Mean=(2+3+3+4+20)/5=6.4.','The ordered middle value is 3, so median=3.','The extreme value 20 pulls the mean upward.'],'Median 3 better represents the typical values in this skewed set.','Create five values with mean 10 but median different from 10.');
teach('6-1',[
'A translation slides every point the same distance and direction while preserving size, shape, and orientation.',
'A reflection flips a figure across a mirror line; corresponding points are equally distant from that line.',
'A rotation turns a figure around a fixed center through a stated angle and direction.',
'A dilation changes size by a scale factor while preserving angles and proportional side lengths.',
'A tessellation covers the plane with repeated shapes and no gaps or overlaps; angles at a vertex total 360°.'
],'Can regular hexagons tessellate the plane by themselves?',['A regular hexagon has interior angle 120°.','Three hexagons meet at a vertex.','3×120°=360°, leaving no gap or overlap.'],'Yes, regular hexagons tessellate the plane.','Use its interior angle to determine whether a regular pentagon tessellates alone.');
teach('6-2',[
'Scale compares a drawing length with the corresponding real length using one consistent factor.',
'Similar figures have equal corresponding angles and proportional corresponding sides.',
'Multiplying lengths by k multiplies perimeter by k, area by k², and volume by k³.',
'Cultural designs can be analyzed using translation, reflection, rotation, symmetry, and repetition.',
'Responsible cultural analysis cites the community or artifact and does not label an invented motif as traditional.'
],'A 4 cm by 6 cm motif is enlarged by scale factor 1.5. Find its dimensions and area.',['New lengths: 4(1.5)=6 cm and 6(1.5)=9 cm.','Original area=24 cm².','New area=6×9=54 cm², also 24(1.5²).'],'The enlargement is 6 cm by 9 cm with area 54 cm².','Identify two transformations in a documented Philippine motif.');
teach('7-1',[
'a≡b (mod n) means a and b leave the same remainder when divided by n.',
'Modular arithmetic models repeating cycles such as clocks, weekdays, and rotating schedules.',
'A weighted sum multiplies each digit by an assigned positional weight before the products are added.',
'A check digit is calculated from the other digits and added to detect many common entry errors.',
'Check digits detect errors but do not prove a record is authentic or that its information is correct.'
],'Choose c so 3+7+4+c is divisible by 10.',['Known sum is 14.','The next multiple of 10 is 20.','c=20−14=6.','Check: 3+7+4+6=20.'],'The check digit is 6.','Create a four-digit number whose digit-sum check is divisible by 10.');
teach('7-2',[
'Encoding represents information with agreed symbols; it does not necessarily hide the information.',
'Binary uses two symbols, 0 and 1, to represent two-state information.',
'Redundancy adds controlled extra information so a receiver can test whether transmission changed.',
'An even-parity bit makes the total number of 1s even; odd parity makes the total odd.',
'Hamming distance counts differing positions between codewords; larger separation improves error detection.'
],'Add an even-parity bit to 1011001.',['Count four 1s.','Four is already even.','Choose parity bit 0 to preserve even parity.'],'With parity last, transmit 10110010.','Add odd parity to 110010, flip one bit, and test detection.');
teach('8-1',[
'Plaintext is readable information; ciphertext is the transformed form; a key controls the transformation.',
'A Caesar cipher represents letters by numbers and adds a fixed shift modulo 26.',
'Decryption reverses encryption: a shift of +k is reversed by −k modulo 26.',
'A substitution cipher replaces each symbol consistently and therefore preserves repeated-letter patterns.',
'Frequency analysis exploits language patterns, making simple monoalphabetic ciphers unsuitable for modern security.'
],'Encrypt MATH with a Caesar shift of +3.',['Use A=0 through Z=25.','Add 3 modulo 26 to each letter.','M→P, A→D, T→W, H→K.'],'MATH encrypts to PDWK.','Decrypt KHOOR using shift 3 and show one modular subtraction.');
teach('8-2',[
'Symmetric encryption uses one shared secret key for both encryption and decryption.',
'Asymmetric encryption uses related public and private keys that perform different operations.',
'A one-way operation is easy to perform but intentionally difficult to reverse without special information.',
'Digital signatures support authenticity and integrity by allowing a receiver to detect alteration.',
'Security also depends on strong passwords, protected devices, updates, and resistance to social engineering.'
],'Ana wants anyone to send her a private message. Which key should she distribute?',['The public key is designed to be shared.','Senders use Ana’s public key for the protected operation.','Ana alone protects and uses the related private key.'],'Ana distributes her public key and keeps her private key secret.','Explain confidentiality and authentication using a sealed-letter analogy.');
teach('9-1',[
'Decision variables name the quantities the model must choose and must include clear units.',
'The objective function expresses what to maximize or minimize, such as profit, cost, time, or output.',
'Constraints translate resource limits and required conditions into linear inequalities.',
'Non-negativity constraints state that ordinary production quantities cannot be negative.',
'A linear model assumes constant per-unit contribution and resource use within the modeled range.'
],'A earns ₱40 and uses 2 labor hours; B earns ₱30 and uses 1 hour. Only 8 hours are available.',['Let x and y be units of A and B.','Maximize P=40x+30y.','Labor constraint: 2x+y≤8.','Include x≥0 and y≥0.'],'Max P=40x+30y subject to 2x+y≤8, x,y≥0.','Add a material constraint when A uses 1 kg, B uses 3 kg, and 12 kg are available.');
teach('9-2',[
'Replace an inequality with equality to draw its boundary line.',
'A solid boundary includes equality (≤ or ≥); a dashed boundary excludes it (< or >).',
'A test point determines which side of a boundary satisfies an inequality.',
'The feasible region is the intersection of all constraint regions.',
'Corner points occur where boundaries meet and are candidates for a linear optimum.'
],'Graph x+y≤6, x≤4, x≥0, y≥0 and list the vertices.',['Draw x+y=6 through (0,6) and (6,0), then shade below.','Draw x=4 and keep its left side.','Restrict to the first quadrant.','List boundary intersections.'],'Vertices are (0,0), (4,0), (4,2), and (0,6).','Graph 2x+y≤8 and x+2y≤8 in the first quadrant.');
teach('10-1',[
'For a bounded feasible polygon, a linear objective reaches an optimum at one or more corner points.',
'The corner-point method evaluates the same objective function at every feasible vertex.',
'The greatest objective value gives a maximum; the least gives a minimum.',
'Equal best values at adjacent vertices mean every point on the connecting edge is also optimal.',
'An infeasible model has no common feasible point; an unbounded model may have no finite optimum.'
],'Maximize P=40x+30y at (0,0), (4,0), (4,2), and (0,6).',['P(0,0)=0.','P(4,0)=160.','P(4,2)=220.','P(0,6)=180.','Compare all results.'],'Maximum P=₱220 at (4,2).','Minimize C=5x+8y at three supplied feasible vertices.');
teach('10-2',[
'A binding constraint is met exactly at the solution; a nonbinding constraint has slack or unused capacity.',
'Sensitivity analysis changes one assumption at a time to test whether the recommendation remains stable.',
'Indivisible decisions require whole numbers, so a fractional graphical optimum must be adjusted and rechecked.',
'A solution is optimal only for the objective and constraints actually included in the model.',
'Ethical optimization may require safety, fairness, quality, or environmental constraints.'
],'A model recommends 2.5 buses, but buses are indivisible. What should be done?',['Identify nearby feasible integers, such as 2 and 3.','Recalculate the objective for each.','Check capacity and every constraint.','Choose the best implementable candidate.'],'Use the best feasible whole-number alternative; never round blindly.','Add one fairness constraint to a cost-minimizing transport model.');
teach('11-1',[
'Principal P is the starting amount; rate r is a decimal and must match the time unit.',
'Simple interest I=Prt is computed only from the original principal.',
'Compound amount A=P(1+r/n)^(nt) applies interest to an accumulating balance.',
'More frequent compounding slightly increases future value when other conditions are fixed.',
'Financial choices require comparable periods, effective rates, fees, and time horizons.'
],'Find simple interest and maturity value for ₱10,000 at 6% annually for 2 years.',['P=10,000, r=.06, t=2.','I=Prt=10,000(.06)(2)=1,200.','A=P+I=11,200.'],'Interest is ₱1,200 and maturity value is ₱11,200.','Compute annual compound value under the same conditions and compare.');
teach('11-2',[
'An annuity is a sequence of equal payments made at equal time intervals.',
'Ordinary-annuity payments occur at period end; annuity-due payments occur at period beginning.',
'Future value asks what payments accumulate to; present value asks what future payments are worth now.',
'Amortization divides a loan into scheduled payments containing interest and principal.',
'Responsible borrowing compares total repayment, fees, rate, term, and affordability—not monthly payment alone.'
],'A ₱2,000 monthly payment lasts 24 months with a ₱3,000 processing fee. Find total outflow.',['Payments total 2,000×24=₱48,000.','Add the ₱3,000 fee.','Keep unstated charges outside the calculation.'],'Total stated cash outflow is ₱51,000.','Compare two loans using payment, term, rate, and fees.');
teach('12-1',[
'A preference ballot ranks candidates; a preference schedule groups ballots with identical rankings.',
'Plurality counts only first choices, so its winner may have less than a majority.',
'Plurality with elimination removes the lowest candidate and transfers those ballots.',
'Borda count assigns points to every rank position and uses the full ordering.',
'Pairwise comparison holds head-to-head contests and may select a different winner.'
],'A has 9 first-choice votes, B has 7, and C has 4 among 20 voters.',['Compare first-choice totals.','A has the largest total.','A majority requires more than 10 of 20 votes.'],'A wins plurality with 9 votes but has no majority.','Construct a preference schedule where plurality and Borda choose different winners.');
teach('12-2',[
'The majority criterion says a candidate ranked first by more than half should win.',
'A Condorcet winner defeats every other candidate in separate head-to-head comparisons.',
'Monotonicity says moving a winner higher should not cause that candidate to lose.',
'Independence asks whether the comparison of two candidates should depend on an unrelated alternative.',
'Arrow’s theorem shows that no ranked method with at least three options satisfies every desirable fairness condition.'
],'A defeats B 60–40 and defeats C 55–45 in head-to-head contests.',['Compare A with B.','Compare A with C.','A defeats every opponent separately.'],'A is the Condorcet winner.','Explain why following a method’s rules does not guarantee fairness under every criterion.');
teach('13-1',[
'The standard divisor equals total population divided by the number of available seats.',
'A standard quota equals a group’s population divided by the standard divisor.',
'Lower quota rounds down and upper quota rounds up because allocated seats must be whole.',
'Hamilton assigns lower quotas first and gives remaining seats to the largest fractional remainders.',
'Hamilton obeys quota but can experience paradoxes when seats or populations change.'
],'Quotas are A=4.6, B=3.3, C=2.1 for 10 seats. Apply Hamilton.',['Assign lower quotas 4, 3, and 2: total 9.','One seat remains.','Compare remainders .6, .3, .1.','Give the seat to A.'],'A=5, B=3, C=2.','Apply Hamilton to quotas 5.45, 4.35, and 3.20.');
teach('13-2',[
'Divisor methods adjust one common divisor until rounded modified quotas total the required seats.',
'Jefferson rounds modified quotas down and tends to favor larger groups.',
'Adams rounds modified quotas up and tends to favor smaller groups.',
'Webster rounds to the nearest integer and is often more balanced.',
'The apportionment method must be selected before results are known because different methods embody different fairness choices.'
],'Modified quotas are 4.7, 3.4, and 1.9. Compare rounding rules.',['Jefferson rounds to 4,3,1.','Adams rounds to 5,4,2.','Webster rounds to 5,3,2.','If the total is wrong, change the common divisor and recompute all quotas.'],'The example shows the rules; a final allocation needs the required seat total.','Explain why changing only one quota violates a divisor method.');
teach('14-1',[
'A proposition is a declarative statement with a definite truth value; commands and questions are not propositions.',
'Negation ¬p reverses the truth value of p.',
'Conjunction p∧q is true only when both are true; inclusive disjunction p∨q is true when at least one is true.',
'Conditional p→q is false only when p is true and q is false; a biconditional is true when both sides match.',
'A tautology is always true, a contradiction always false, and a contingency has mixed truth values.'
],'Evaluate p→q when p is true and q is false.',['The condition p occurs.','The promised result q does not occur.','This is the single false row of the conditional.'],'p→q is false.','Construct the truth table for ¬p∨q and compare it with p→q.');
teach('14-2',[
'Logical equivalence means two expressions have the same truth values in every row.',
'De Morgan’s laws are ¬(p∧q)≡¬p∨¬q and ¬(p∨q)≡¬p∧¬q.',
'A conditional is equivalent to its contrapositive, not generally to its converse or inverse.',
'Modus ponens uses p→q and p; modus tollens uses p→q and ¬q.',
'Affirming the consequent and denying the antecedent resemble valid forms but do not guarantee their conclusions.'
],'If it rains, the road is wet. The road is not wet. What follows?',['Form: p→q and ¬q.','Apply modus tollens.','Conclude ¬p.'],'The argument validly concludes that it did not rain, assuming the premise.','Give an everyday example of affirming the consequent.');
teach('15-1',[
'A graph consists of vertices representing objects and edges representing connections.',
'The degree of a vertex is the number of incident edges; a loop contributes two to degree.',
'A connected graph provides a path between every pair of vertices.',
'An Euler path uses every edge once; an Euler circuit does so and returns to the start.',
'A connected graph has an Euler circuit with zero odd vertices and an Euler path with exactly two odd vertices.'
],'A connected graph has degrees 3,3,2,2. What Euler route exists?',['The two degree-3 vertices are odd.','There are exactly two odd vertices.','Apply the Euler degree criterion.'],'It has an Euler path between the odd vertices but no Euler circuit.','Draw a four-vertex graph with an Euler circuit and verify degrees.');
teach('15-2',[
'A Hamiltonian path visits every vertex exactly once; a Hamiltonian circuit returns to its start.',
'Euler problems focus on using edges; Hamiltonian problems focus on visiting vertices.',
'Edge weights may represent distance, time, cost, risk, or another comparison criterion.',
'The traveling-salesperson problem seeks the least-weight Hamiltonian circuit.',
'Nearest neighbor is a useful heuristic but does not guarantee a globally optimal tour.'
],'A–B–C–D–A visits each location once and returns to A. Classify it.',['Check that A,B,C,D are all visited.','No intermediate vertex repeats.','The route returns to the starting vertex.'],'It is a Hamiltonian circuit.','Apply nearest neighbor from two starting vertices and compare totals.');
teach('16-1',[
'A tree is a connected graph with no cycles.',
'Every tree with n vertices has exactly n−1 edges.',
'A spanning tree connects every vertex of a graph without cycles.',
'A minimum spanning tree has the least total edge weight among spanning trees.',
'Kruskal adds the lightest safe edge; Prim grows one connected tree from a chosen vertex.'
],'In Kruskal’s method, an edge of weight 4 would create a cycle after weights 2 and 3 were added.',['Reject the weight-4 edge because it creates a cycle.','Consider the next-lightest unused edge.','Add it only if it connects components without a cycle.'],'Skip weight 4 and test the next edge.','Construct a minimum spanning tree and record every accepted and rejected edge.');
teach('16-2',[
'A project network shows activities, durations, and precedence requirements.',
'Earliest start depends on finished prerequisites; earliest finish equals start plus duration.',
'Latest times show how late an activity may occur without delaying the project.',
'Slack is latest start minus earliest start; zero-slack activities are critical.',
'The critical path is the longest-duration dependency path and determines minimum completion time.'
],'Path A takes 3+5+2 days; Path B takes 4+4 days. Which is critical?',['Path A totals 10 days.','Path B totals 8 days.','The longer dependency path controls completion.'],'Path A is critical; minimum project duration is 10 days.','Create two parallel paths and calculate slack on the shorter path.');
teach('17-1',[
'Undefined terms are primitive ideas accepted without formal definition inside a system.',
'Definitions assign precise meanings using already accepted terms.',
'Axioms or postulates are foundational statements accepted without proof.',
'Theorems are logically derived from axioms, definitions, and earlier results.',
'A system is consistent when it cannot prove both a statement and its negation.'
],'Rule: every zor is a mip. Object A is a zor. What follows?',['Accept the stated system rule.','A satisfies the rule’s condition.','Apply the rule deductively.'],'A is a mip within the stated system.','Invent two primitive terms and axioms, then derive one consequence.');
teach('17-2',[
'Closure means an operation on members of a set always produces another member of the set.',
'An identity leaves an element unchanged; an inverse combines with an element to produce the identity.',
'Modulo n arithmetic uses remainder classes 0 through n−1.',
'An operation table displays all pairwise results and reveals closure, identity, and inverses.',
'Changing the parallel postulate produces non-Euclidean geometries with different valid conclusions.'
],'Find 4+3 modulo 5 and the additive inverse of 2.',['7 leaves remainder 2 modulo 5.','Find x with 2+x≡0 (mod 5).','x=3 because 2+3=5≡0.'],'4+3≡2 (mod 5); the inverse of 2 is 3.','Build the addition table modulo 4 and identify every inverse.');
teach('18-1',[
'Begin with a decision question precise enough to determine which evidence and tools are relevant.',
'Choose a representation that fits: statistics, optimization constraints, finance formulas, voting rules, or networks.',
'State assumptions because every mathematical model simplifies reality.',
'Verify calculations and compare feasible alternatives using the same criteria.',
'A defensible recommendation links evidence to the decision and acknowledges uncertainty and limitations.'
],'Choose between a short flood-prone route and a longer reliable route.',['Define time, cost, capacity, and flood-risk criteria.','Use documented measurements or ratings.','Compare normal and high-risk scenarios.','State which criterion receives priority and why.'],'The best route depends on transparent criteria; shortest is not automatically best.','Frame a campus decision requiring at least two CGE103 tools.');
teach('18-2',[
'A strong presentation begins with the decision or claim, then provides evidence and reasoning.',
'Tables and graphs need titles, units, readable labels, honest scales, and sources.',
'Reproducibility means another person can follow the method and obtain the same result.',
'Ethical disclosure includes assumptions, uncertainty, omitted factors, limitations, and stakeholder effects.',
'Mathematical citizenship means using quantitative reasoning responsibly in personal, professional, and public decisions.'
],'Improve: “Option A is better because it is 20% cheaper.”',['State actual amounts and the comparison base.','Check quality, time, risk, and fees.','Cite the source and period.','Explain why cost receives priority.'],'A defensible claim reports evidence, context, assumptions, criteria, and limitations.','Prepare one recommendation slide with one visual, two calculations, and one limitation.');
const currentTeaching=T[`${weekNo}-${sessionNo}`];
const conceptExplanation=(idea,i)=>{
 const explanation=currentTeaching?.d?.[i]||`${idea} connects the definition, representation, procedure, and interpretation required in this lesson.`;
 const example=s.examples[i%s.examples.length];
 return `<p class="lead">${esc(explanation)}</p><div class="example"><strong>Concrete example:</strong> ${esc(example)}</div>`;
};
const workedSteps=[
 `Identify the mathematical idea involved: ${s.ideas[0]}.`,
 'Separate the given information from the quantity, conclusion, or decision being requested.',
 'Choose a suitable representation such as a statement, table, diagram, graph, formula, or network.',
 'Apply the rule carefully, keeping labels, units, conditions, and intermediate results visible.',
 'Interpret the result in a complete sentence and check whether it is reasonable in the original situation.'
];
const slides=[];
const add=(cls,html)=>slides.push(`<section class="slide ${cls}" data-number="${slides.length+1}">${html}</section>`);
add('cover',`<div><p class="kicker">Week ${weekNo} · Session ${sessionNo}</p><h1>${esc(s.title)}</h1><p class="lead">${esc(week.theme)}</p></div>`);
add('slide-title',`<div><p class="kicker">Learning outcomes</p><h2>At the end of this session</h2></div>${bullets([`Explain the meaning of ${s.ideas[0]} and ${s.ideas[1]}.`,s.focus,'Apply the lesson to a new situation and justify the result.'])}`);
add('two-col',`<div><p class="kicker">Opening prompt</p><h2>Where does this appear in daily life?</h2><p class="lead">Think of one decision, object, post, transaction, or route that uses today’s idea.</p></div><div class="panel"><strong>Think · Pair · Share</strong>${bullets(['Think independently for one minute.','Explain your example to a partner.','Identify the mathematical information involved.'])}</div>`);
add('slide-title',`<div><p class="kicker">Activate prior knowledge</p><h2>What do we already know?</h2></div>${bullets(['What words or symbols are familiar?','What could be measured, compared, or classified?','What mistake might someone easily make?'])}`);
add('slide-title',`<div><p class="kicker">Concept map</p><h2>Five ideas guide this session</h2></div>${bullets(s.ideas)}`);
s.ideas.forEach((idea,i)=>add(i%2?'two-col':'slide-title',i%2?`<div><p class="kicker">Key concept ${i+1} of 5</p><h2>${esc(idea)}</h2>${conceptExplanation(idea,i)}</div><div class="panel"><strong>Understand the concept</strong>${bullets(['State the idea in your own words.','Identify the information needed to use it.','Explain why the example fits the definition.','Give one non-example or common misuse.'])}</div>`:`<div><p class="kicker">Key concept ${i+1} of 5</p><h2>${esc(idea)}</h2></div>${conceptExplanation(idea,i)}${bullets(['Meaning: explain the idea before applying a procedure.','Representation: connect words with symbols, diagrams, tables, or graphs.','Interpretation: relate every result to the original situation.'])}`));
add('two-col',`<div><p class="kicker">Example 1</p><h2>Read the situation carefully</h2><div class="example">${esc(s.examples[0])}</div></div><div class="panel"><strong>Before solving</strong>${bullets(['Identify given information.','State what must be found.','Keep units and conditions visible.'])}</div>`);
add('slide-title',`<div><p class="kicker">Worked example · solution process</p><h2>From information to a justified answer</h2></div><ol>${workedSteps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`);
if(currentTeaching){
 add('two-col',`<div><p class="kicker">Fully solved example</p><h2>${esc(currentTeaching.problem)}</h2><ol>${currentTeaching.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div><div class="panel"><strong>Final answer</strong><p class="lead">${esc(currentTeaching.answer)}</p></div>`);
}
add('two-col',`<div><p class="kicker">Worked example · interpretation</p><h2>What the result means</h2><div class="example">${esc(s.examples[0])}</div></div><div class="panel"><strong>A complete answer must include</strong>${bullets(['The computed or logical result','The correct unit, label, or truth condition','A sentence connected to the question','One reason the result is reasonable'])}</div>`);
add('check',`<div><p class="kicker">Pause and check</p><h2>Does the result make sense?</h2></div>${bullets(['Estimate the expected size or direction.','Check the unit and base of comparison.','Try an alternate representation or reverse operation.'])}`);
add('two-col',`<div><p class="kicker">Example 2 · comparison</p><h2>Compare, do not merely calculate</h2><div class="example">${esc(s.examples[1])}</div></div><div class="panel"><strong>Analyze the example</strong>${bullets(['What information is changing?','What remains fixed?','Which concept from the lesson applies?','What conclusion is supported?'])}</div>`);
add('slide-title',`<div><p class="kicker">Common mistakes</p><h2>A plausible-looking answer can still be wrong</h2></div>${bullets([`Using ${s.ideas[0]} without checking its definition or conditions`,'Substituting values before identifying what each quantity represents','Ignoring units, reference groups, constraints, direction, or scale','Treating a digital output as an explanation','Giving an answer without interpreting or verifying it'])}`);
add('two-col',`<div><p class="kicker">Multiple representations</p><h2>Show the same idea another way</h2><p class="lead">Words, symbols, tables, graphs, and diagrams emphasize different features.</p></div><div class="panel">${bullets(['Words explain meaning.','Symbols show structure.','Tables organize cases.','Graphs reveal shape and change.'])}</div>`);
add('two-col',`<div><p class="kicker">Example 3 · critical interpretation</p><h2>What can—and cannot—be concluded?</h2><div class="example">${esc(s.examples[2])}</div></div><div class="panel"><strong>Write two statements</strong>${bullets(['One conclusion directly supported by the information','One tempting conclusion that the information does not justify'])}</div>`);
add('slide-title',`<div><p class="kicker">Digital application</p><h2>Use technology with mathematical control</h2></div><p class="lead">${esc(s.tool)}</p>`);
add('activity',`<div><p class="kicker">Walkthrough · Step 1</p><h2>Prepare the information</h2></div>${bullets(['Open the specified tool and start a clean file or page.','Label every input, column, axis, or object before entering values.','Record the source, date, and unit when data are external.'])}`);
add('activity',`<div><p class="kicker">Walkthrough · Step 2</p><h2>Build the representation</h2></div>${bullets(['Enter a small test case first.','Use references, formulas, or construction tools deliberately.','Check one result manually before copying or automating.'])}`);
add('activity',`<div><p class="kicker">Walkthrough · Step 3</p><h2>Verify and communicate</h2></div>${bullets(['Change one input and predict the effect before observing it.','Inspect labels, scale, rounding, and formatting.','Write the conclusion beside the output—not only in your head.'])}`);
add('two-col activity',`<div><p class="kicker">Guided practice</p><h2>Apply the lesson step by step</h2><p class="lead">Create a new situation similar to “${esc(s.examples[1])}” but change one important value, condition, or category.</p></div><div class="panel">${bullets(['1. List the given information and target.','2. Select and name the concept used.','3. Show the representation and complete solution.','4. Interpret and verify the answer.'])}</div>`);
add('activity',`<div><p class="kicker">Independent practice</p><h2>Solve and explain</h2></div>${bullets([`Use ${s.ideas[0]} and ${s.ideas[1]} in one original example.`,'Show every necessary step or relationship.','Write the final conclusion in words.','Identify one assumption or limitation.'])}`);
if(currentTeaching)add('check',`<div><p class="kicker">Topic-specific practice</p><h2>Apply what you learned</h2></div><p class="lead">${esc(currentTeaching.practice)}</p>${bullets(['Show the representation or formula used.','Complete the solution clearly.','Interpret and verify the result.'])}`);
add('two-col activity',`<div><p class="kicker">Collaborative task</p><h2>Create and exchange a problem</h2><p class="lead">In pairs, write a realistic situation using today’s concept. Exchange, solve, and give one precision-focused comment.</p></div><div class="panel"><strong>Success criteria</strong>${bullets(['Solvable with supplied information','Correct use of concept and units','Clear and defensible interpretation'])}</div>`);
add('check',`<div><p class="kicker">Independent check</p><h2>Explain without the slide</h2></div>${bullets([`Define “${s.ideas[0]}” in your own words.`,`Use “${s.ideas[1]}” in a new example.`,`Name one error that careful checking prevents.`])}`);
add('slide-title',`<div><p class="kicker">Exit ticket</p><h2>Three sentences before you leave</h2></div>${bullets(['Today I learned that…','A result should be checked by…','I can apply this when…'])}`);
add('summary',`<div><p class="kicker">Session synthesis</p><h2>What you should remember</h2><p class="lead">${esc(s.focus)}</p></div>${bullets(s.ideas)}`);
add('cover',`<div><p class="kicker">Next step</p><h1>Practice, verify, explain.</h1><p class="lead">Complete the weekly quiz after both sessions. Keep your working and interpretations.</p></div>`);
if(weekNo===4&&sessionNo===1){
 const actual=[
 ['cover','<div><p class="kicker">Week 4 · Session 1</p><h1>Inductive and Deductive Reasoning</h1><p class="lead">From observations to reliable mathematical conclusions</p></div>'],
 ['slide-title','<div><p class="kicker">Learning outcomes</p><h2>What you will learn</h2></div><ul><li>Differentiate inductive and deductive reasoning.</li><li>Form and test a conjecture.</li><li>Disprove a universal claim with a counterexample.</li><li>Identify premises and conclusions.</li><li>Judge whether an argument is valid.</li></ul>'],
 ['two-col','<div><p class="kicker">Opening pattern</p><h2>What comes next?</h2><div class="example">2, 6, 12, 20, 30, ___</div></div><div class="panel"><p>Differences are 4, 6, 8, 10.</p><p>The next difference may be 12.</p><p><strong>Prediction: 42.</strong></p><p>A prediction supported by a pattern is not yet proof.</p></div>'],
 ['slide-title','<div><p class="kicker">Reasoning</p><h2>Mathematics is more than calculation</h2></div><p class="lead">Reasoning explains why a claim should be accepted. It connects evidence or premises to a conclusion and reveals when information is insufficient.</p>'],
 ['slide-title','<div><p class="kicker">An argument</p><h2>Premises support a conclusion</h2></div><div class="example">Premise 1: All squares have four sides.<br>Premise 2: Figure A is a square.<br>Conclusion: Figure A has four sides.</div>'],
 ['two-col','<div><p class="kicker">Comparison</p><h2>Two forms of reasoning</h2></div><div class="panel"><p><strong>Inductive:</strong> specific observations → probable general claim.</p><p><strong>Deductive:</strong> accepted rule → necessary specific conclusion.</p><p>Induction discovers patterns; deduction proves or applies rules.</p></div>'],
 ['slide-title','<div><p class="kicker">Inductive reasoning</p><h2>Observation → pattern → conjecture</h2></div><p class="lead">Inductive reasoning examines particular cases and proposes a general rule. More evidence can strengthen the conjecture, but examples alone do not make it certain.</p>'],
 ['two-col','<div><p class="kicker">Example</p><h2>3, 7, 11, 15, 19, …</h2></div><div class="panel"><ol><li>Observe a constant increase of 4.</li><li>Conjecture: add 4 each time.</li><li>Predict the next term: 23.</li></ol></div>'],
 ['two-col','<div><p class="kicker">Visual pattern</p><h2>Growing tiles</h2><div class="example">Stage 1: 3<br>Stage 2: 5<br>Stage 3: 7</div></div><div class="panel"><p>The design adds 2 tiles per stage.</p><p>Possible rule: T(n)=2n+1.</p><p>Check the rule against every supplied stage.</p></div>'],
 ['slide-title','<div><p class="kicker">Conjecture</p><h2>A claim waiting to be tested</h2></div><ul><li>State the proposed rule precisely.</li><li>Test new cases beyond the original examples.</li><li>Search for a case that fails.</li><li>Prove the rule deductively or revise it.</li></ul>'],
 ['two-col','<div><p class="kicker">Counterexample</p><h2>One case can disprove “all”</h2></div><div class="panel"><p><strong>Claim:</strong> All prime numbers are odd.</p><p><strong>Counterexample:</strong> 2 is prime and even.</p><p><strong>Therefore:</strong> the universal claim is false.</p></div>'],
 ['check','<div><p class="kicker">Try it</p><h2>Disprove the claim</h2></div><p class="lead">“Squaring a number always makes it greater.”</p><p>Test x=1/2: x²=1/4, and 1/4&lt;1/2. Therefore, x=1/2 is a counterexample.</p>'],
 ['slide-title','<div><p class="kicker">Deductive reasoning</p><h2>Rules → necessary conclusion</h2></div><p class="lead">If an argument has a valid form and true premises, its conclusion must be true. Deduction is the basis of mathematical proof.</p>'],
 ['two-col','<div><p class="kicker">Deductive example</p><h2>Apply a general rule</h2></div><div class="panel"><p>All multiples of 4 are even.</p><p>28 is a multiple of 4.</p><p><strong>Therefore, 28 is even.</strong></p></div>'],
 ['two-col','<div><p class="kicker">Geometry example</p><h2>Find the missing angle</h2></div><div class="panel"><p>Triangle angles total 180°.</p><p>Given: 55° and 65°.</p><p>180°−55°−65°=60°.</p><p><strong>The third angle is 60°.</strong></p></div>'],
 ['slide-title','<div><p class="kicker">Validity</p><h2>Does the conclusion logically follow?</h2></div><p class="lead">A valid argument cannot have all true premises and a false conclusion. Validity concerns structure; truth concerns the accuracy of the statements.</p>'],
 ['two-col','<div><p class="kicker">Valid form</p><h2>Modus ponens</h2><div class="formula-big">If p→q<br>p<br>∴ q</div></div><div class="panel"><p>If a number is divisible by 10, it ends in 0.</p><p>350 is divisible by 10.</p><p>Therefore, 350 ends in 0.</p></div>'],
 ['two-col','<div><p class="kicker">Invalid form</p><h2>Affirming the consequent</h2></div><div class="panel"><p>If it rains, the road is wet.</p><p>The road is wet.</p><p>Therefore, it rained.</p><p><strong>Invalid:</strong> a sprinkler could also wet the road.</p></div>'],
 ['slide-title','<div><p class="kicker">Sound argument</p><h2>Valid form + true premises</h2></div><ul><li>First check whether the conclusion follows.</li><li>Then check whether the premises are true.</li><li>A sound argument satisfies both requirements.</li></ul>'],
 ['two-col','<div><p class="kicker">Classify A</p><h2>The next bus will be late</h2><div class="example">The last five buses were late, so the next bus will probably be late.</div></div><div class="panel"><strong>Inductive</strong><p>The conclusion is a probability based on observed cases.</p></div>'],
 ['two-col','<div><p class="kicker">Classify B</p><h2>A rectangle property</h2><div class="example">All rectangles have four right angles. R is a rectangle. Therefore R has four right angles.</div></div><div class="panel"><strong>Deductive</strong><p>A definition is applied to a specific case.</p></div>'],
 ['activity','<div><p class="kicker">Guided practice</p><h2>Classify and justify</h2></div><ol><li>1,4,9,16 suggests the next term is 25.</li><li>All even integers are divisible by 2; 86 is even; therefore 86 is divisible by 2.</li><li>The first four tested products are positive, so the next one will be positive.</li></ol>'],
 ['activity','<div><p class="kicker">Answers</p><h2>Check the reasoning</h2></div><ol><li>Inductive—pattern-based prediction.</li><li>Deductive—general rule applied to 86.</li><li>Inductive—conclusion based on tested cases.</li></ol>'],
 ['check','<div><p class="kicker">Independent practice</p><h2>Show your reasoning</h2></div><ol><li>Give a counterexample: “All numbers divisible by 3 are odd.”</li><li>Write one inductive argument from daily life.</li><li>Write one deductive argument and label its premises.</li><li>Explain why many examples are not a proof.</li></ol>'],
 ['summary','<div><p class="kicker">Summary</p><h2>What you should remember</h2></div><ul><li>Induction produces probable conjectures from observations.</li><li>Deduction produces necessary conclusions from premises.</li><li>One counterexample disproves a universal claim.</li><li>Validity is about logical structure.</li><li>Soundness requires validity and true premises.</li></ul>'],
 ['cover','<div><p class="kicker">Exit ticket</p><h1>Observation or proof?</h1><p class="lead">Write one inductive and one deductive argument. Label the evidence or premises and the conclusion.</p></div>']
 ];
 slides.length=0;actual.forEach(x=>add(x[0],x[1]));
}
deck.innerHTML=slides.join('');
let current=0;const els=[...document.querySelectorAll('.slide')],counter=document.querySelector('#counter');function show(n){current=(n+els.length)%els.length;els.forEach((e,i)=>e.classList.toggle('active',i===current));counter.textContent=`${current+1} / ${els.length}`;history.replaceState(null,'',`?week=${weekNo}&session=${sessionNo}#${current+1}`)}
document.querySelector('#prev').onclick=()=>show(current-1);document.querySelector('#next').onclick=()=>show(current+1);document.querySelector('#fullscreen').onclick=()=>document.documentElement.requestFullscreen?.();addEventListener('keydown',e=>{if(['ArrowRight',' ','PageDown'].includes(e.key))show(current+1);if(['ArrowLeft','PageUp'].includes(e.key))show(current-1);if(e.key==='Home')show(0);if(e.key==='End')show(els.length-1)});show(Math.max(0,(+location.hash.slice(1)||1)-1));
