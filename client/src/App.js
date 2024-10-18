import "./App.css";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

function App() {
  const session = useSession(); //currnet active tokens are stored in here
  const supabase = useSupabaseClient(); //talking to supabase client
  const { isLoading } = useSessionContext();

  const tempevent = {
    summary: "EXAM PSY220",
    description: "EXAM FOR PSY220",
    start: {
      dateTime: "2024-06-04T13:40:00",
      timeZone: "Asia/Kolkata",
    },
    end: {
      dateTime: "2024-06-04T15:30:00",
      timeZone: "Asia/Kolkata",
    },
  };
  //make the function that will send the calendar inforamtoin
  async function postCalendar(event, session) {
    console.log("creating calendar event");

    try {
      const response = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + session.provider_token, // Access token for Google
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      alert("Event created, check your Google Calendar!");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event, please try again.");
    }
  }

  //jsonify the data above, and then make a fetch request , POST to "/add-event",
  if (isLoading) {
    return <></>;
  }
  const googleSignin = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          //insert oauth scope
          scopes: "https://www.googleapis.com/auth/calendar",
        },
      });
    } catch (error) {
      alert("Error logging in to gogole provider with supabase");
      console.log(error);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  console.log(session);
  return (
    <div className="App">
      <div className="main" style={{ width: "400px", margin: "30px auto" }}>
        {session ? (
          <>
            <h1>HEY THERE {session.user.email}</h1>
            <button onClick={() => postCalendar(tempevent, session)}>
              POST to Calendar
            </button>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
            {/* logged in page with add files button  */}
          </>
        ) : (
          <>
            <button onClick={() => googleSignin()}> Sign in with Google</button>
          </>
        )}
        {/* differnt page here ,, the home not logged in page */}
      </div>
    </div>
  );
}

export default App;
