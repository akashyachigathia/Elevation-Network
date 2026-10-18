    (() => {
        const notes = {
          about: [
            "Why I created Elevation Network",
            [
              [
                "The opportunity",
                "I wanted to explore a more approachable way to learn from professionals and meet people through shared interests. The concept combines expert-led discussions with hosted peer networking.",
              ],
              [
                "The problem I am exploring",
                "Online events can leave little room for personal conversations. My starting hypothesis is that smaller groups and guided introductions could help people feel more comfortable asking questions and sharing their work. This has not yet been validated through user research.",
              ],
              [
                "Who it is for",
                "Students, career changers, creatives and curious people from any background, including people without technical experience.",
              ],
              [
                "My contribution and scope",
                "This is my self-directed portfolio concept and front-end practice project. I am developing the idea and building the landing page. The visual starting point was inspired by a Dribbble reference; the learning and networking concept gives it a specific purpose.",
              ],
              [
                "What is demonstrated",
                "The page presents example sessions, a proposed membership and a learning journey. Speaker profiles and prices are illustrative. Live rooms, payments and bookings are proposed features, not working services.",
              ],
              [
                "What I would test next",
                "Ask potential users to find a relevant session and explain its format, price and next step. Then pilot a small hosted event to learn whether introductions feel comfortable and whether people want to stay connected.",
              ],
            ],
          ],
          hero: [
            "01 — Make the purpose clear",
            [
              [
                "User question",
                "What is this platform, and is it for someone like me?",
              ],
              [
                "Design intention",
                "The headline and supporting copy introduce learning and connection together. “Every background welcome” aims to reassure visitors that technical expertise is not required.",
              ],
              [
                "What I would test",
                "Can a first-time visitor describe the offer after reading the hero? I would check whether the broad headline needs a more concrete explanation.",
              ],
            ],
          ],
          actions: [
            "02 — Offer a clear first step",
            [
              [
                "User question",
                "How can I try it, and what happens when I join?",
              ],
              [
                "Design intention",
                "The free-session action offers a starting point, while “See how it works” gives visitors a way to understand the experience first.",
              ],
              [
                "Boundary",
                "The free session is part of the proposed service. This landing page does not collect payment or complete a booking.",
              ],
            ],
          ],
          sessions: [
            "03 — Help people compare sessions",
            [
              [
                "User question",
                "Which conversation suits my interests and experience?",
              ],
              [
                "Design intention",
                "Cards use a consistent order for topic, duration, experience level, group size, host and price. Category labels communicate meaning alongside colour.",
              ],
              [
                "Next improvement",
                "Add dates, time zones and a clear distinction between expert-led sessions and hosted peer networking. Test whether visitors can choose without opening every card.",
              ],
            ],
          ],
          how: [
            "04 — Explain participation before joining",
            [
              ["User question", "Will I only listen, or will I get to speak?"],
              [
                "Design intention",
                "The three steps explain discovery, participation and continued connection. A proposed 15-person limit is intended to leave more space for questions.",
              ],
              [
                "Assumption to test",
                "Fifteen attendees does not guarantee equal speaking time. A pilot should test session length, moderation and how comfortable participants feel contributing.",
              ],
            ],
          ],
          networking: [
            "05 — Make room for peer connections",
            [
              [
                "The extended idea",
                "Alongside expert talks, an organiser could host open networking events. People would meet in small rooms or optional one-to-one pairings to share their stories, work and current projects.",
              ],
              [
                "Proposed experience",
                "A host welcomes everyone, explains the format and offers conversation prompts. Participants can choose whether to rotate partners and stay connected only when both agree.",
              ],
              [
                "Current scope",
                "This is a proposed extension. The current page describes breakout conversations after expert-led sessions; dedicated networking events and matching are not implemented.",
              ],
              [
                "What I would test",
                "Would people prefer matching by interest or open introductions? Can they leave or skip a pairing comfortably? A pilot would explore these questions before building the feature.",
              ],
            ],
          ],
          plans: [
            "06 — Clarify the commitment",
            [
              [
                "User question",
                "What is free, what is included, and what costs extra?",
              ],
              [
                "Design intention",
                "Three plans separate a first group session, recurring membership and private expert time. Listing inclusions helps visitors compare the proposed options.",
              ],
              [
                "Validation needed",
                "The £19 price and session allowance are concept examples. Pricing, willingness to pay and delivery costs need validation; no paid service is being offered here.",
              ],
            ],
          ],
          faq: [
            "07 — Answer concerns before sign-up",
            [
              [
                "User question",
                "Do I belong here, and how will the rooms work?",
              ],
              [
                "Design intention",
                "The FAQ addresses experience requirements, group size and participation. Expandable answers keep the page manageable while letting visitors explore details.",
              ],
              [
                "Next step",
                "Test whether these are the questions people actually ask, and add clear event expectations, accessibility options and community guidelines before a real launch.",
              ],
            ],
          ],
        };
        const toolbar = document.querySelector(".dn-toolbar");
        const toggle = document.getElementById("dn-toggle");
        const dialog = document.getElementById("dn-dialog");
        let opener;
        toolbar.hidden = false;
        toggle.addEventListener("click", () => {
          const show = toggle.getAttribute("aria-pressed") !== "true";
          toggle.setAttribute("aria-pressed", String(show));
          toggle.textContent = show ? "Hide design notes" : "View design notes";
          document
            .querySelectorAll(".dn-marker-row")
            .forEach((row) => (row.hidden = !show));
        });
        document.querySelectorAll("[data-note]").forEach((button) =>
          button.addEventListener("click", () => {
            opener = button;
            const [title, sections] = notes[button.dataset.note];
            document.getElementById("dn-title").textContent = title;
            const content = document.getElementById("dn-content");
            content.replaceChildren();
            sections.forEach(([heading, text]) => {
              const section = document.createElement("section");
              const h = document.createElement("h3");
              h.textContent = heading;
              const p = document.createElement("p");
              p.textContent = text;
              section.append(h, p);
              content.append(section);
            });
            dialog.showModal();
          }),
        );
        document
          .getElementById("dn-close")
          .addEventListener("click", () => dialog.close());
        dialog.addEventListener("click", (e) => {
          if (e.target === dialog) {
            const r = dialog.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              dialog.close();
          }
        });
        dialog.addEventListener("close", () => opener?.focus());
      })();


      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 3000,
        // nav:true,

        responsive: {
          0: {
            items: 3,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 7,
          },
        },
      });
   