

## JS Event callbacks/ event listener
    
    FRONT:      (asincrone)
        * user actions( click/touch.keyboard, mouseover,... ) --DOM
            BINDING: 
                - html attribute <tag on[event] = "callFunction (withParamete)"> noi dictam cum sa fie apelata functia si cu care parametru
                    --->in aceasta metoda nu poti pasa argumentul eventului global

                In aceste 2 metode se foloseste callback, transmitem doar referinta. Aici ca parametru este event
                - js + html element attribute element.on[event] = refFunction 
                    --> in aceasta varianta am avem mai putin control asupra listener-ului

                - js element.addEventListenere("event", refFunction) 
                    ---> aceasta varianta ne ofera mai mult control,putem adauga mai multe listener-uri si le putem sterge. 
                         prin acesta metoda putem adauga multiple event listener to the same element with the same event type

        * timers
        * fetching data



                                    OBSERVER ( design pattern)
        ---------------------------------------------------------------------------    global event variable     
                                                                                            ^
                                                    <------------Observer/Listener#1-------->       event <EventType>
                                                    |                                       |        v
                                +---------------------->watching  EventType  ---------------------> (e) => { callback1( e,val1,val2, ... ) }
                                /                   |                                       |
                               /                    +---------------------------------------+    
                <--------element---------> 
                |        (observable)    |          +------------Observer/Listener#2 -------+               event <EventType>
                |                        |          |                                       |                 v
                |  [event<EventType>]    |          --> watching  EventType  --------------------->callback2( e )
                |         ^              |          |                                       |
                |         |              |          +---------------------------------------+
                |         |              |
                +---------|--------------+  
                       SOURCE:
                         - user action
                         - internal mechanism
                         - bubbling/capturing phase, from: descendant/ ancestor
                         - fake EVENT emissions